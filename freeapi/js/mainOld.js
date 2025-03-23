document.addEventListener('DOMContentLoaded', () => {
    loadControllers();
});

function loadControllers() {
    const controllers = {};

    // Group APIs by controller
    Object.entries(jsonData.paths).forEach(([path, methods]) => {
        const controller = path.split('/')[2];
        if (!controllers[controller]) {
            controllers[controller] = [];
        }
        controllers[controller].push({ path, methods });
    });

    // Populate sidebar
    
    const controllerList = document.getElementById('controllerList');
    controllerList.innerHTML = Object.keys(controllers)
    .map(controller => `
        <a href="#" onclick="loadAPIs('${controller}', event); return false;">
            ${controller}
        </a>
    `).join('');
    

    window.controllers = controllers;

    // Load first controller by default
    if (Object.keys(controllers).length > 0) {
        loadAPIs(Object.keys(controllers)[0]);
    }
}

function loadAPIs(controllerName,event) {
    document.querySelectorAll('#controllerList a').forEach(a => {
        a.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    const controllerAPIs = window.controllers[controllerName] || [];
    const apiAccordion = document.getElementById('apiAccordion');
    apiAccordion.innerHTML = '';

    controllerAPIs.forEach(({ path, methods }, index) => {
        Object.entries(methods).forEach(([method, details]) => {
            const methodColor = getMethodColor(method);
            const parameters = details.parameters || [];
            const requestBody = details.requestBody;
            
            let inputFields = '';
            
            // Add URL parameters
            if (parameters.length > 0) {
                inputFields += '<h6 class="mt-3">URL Parameters:</h6>';
                parameters.forEach(param => {
                    inputFields += `
                        <div class="mb-2">
                            <label class="form-label">
                                ${param.name}
                                ${param.required ? '<span class="text-danger">*</span>' : ''}
                            </label>
                            <input type="text" class="form-control" 
                                id="param-${index}-${param.name}"
                                placeholder="${param.schema.type}">
                        </div>
                    `;
                });
            }

            // Add request body if present
            if (requestBody) {
                inputFields += `
                    <h6 class="mt-3">Request Body:</h6>
                    <div class="mb-2">
                        <textarea class="form-control" id="body-${index}" 
                            rows="4" placeholder="Enter JSON request body"></textarea>
                    </div>
                `;
            }

            const card = document.createElement('div');
            card.className = 'card mb-3';
            card.innerHTML = `
                <div class="card-header">
                    <h5 class="mb-0">
                        <button class="btn btn-secondary text-white w-100 text-start d-flex align-items-center" 
                                type="button" data-bs-toggle="collapse" 
                                data-bs-target="#collapse${index}">
                            <span class="method-badge method-${method.toLowerCase()}">${method.toUpperCase()}</span>
                            ${path}
                        </button>
                    </h5>
                </div>
                <div id="collapse${index}" class="collapse" data-bs-parent="#apiAccordion">
                    <div class="card-body">
                        <p>${details.summary || 'No description available'}</p>
                        ${inputFields}
                        <button class="btn btn-test" onclick="testAPI('${method}', '${path}', ${index})">
                            Test Endpoint
                        </button>
                        <div class="response-container">
                            <h6>Response:</h6>
                            <pre id="response-${index}"></pre>
                        </div>
                    </div>
                </div>
            `;
            apiAccordion.appendChild(card);
        });
    });
}

function getMethodColor(method) {
    const colors = {
        get: 'bg-primary',
        post: 'bg-success',
        put: 'bg-warning',
        delete: 'bg-danger'
    };
    return colors[method.toLowerCase()] || 'bg-secondary';
}

async function testAPI(method, path, index) {
    const responseElement = document.getElementById(`response-${index}`);
    responseElement.innerHTML = 'Loading...';

    try {
        const url = new URL(`https://api.freeprojectapi.com${path}`);
        const options = {
            method: method.toUpperCase(),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Add query parameters
        document.querySelectorAll(`[id^="param-${index}-"]`).forEach(input => {
            if (input.value) {
                url.searchParams.append(
                    input.id.replace(`param-${index}-`, ''),
                    input.value
                );
            }
        });

        // Add request body if present
        const bodyElement = document.getElementById(`body-${index}`);
        if (bodyElement && ['POST', 'PUT'].includes(method.toUpperCase())) {
            try {
                options.body = bodyElement.value;
            } catch (e) {
                responseElement.innerHTML = 'Error: Invalid JSON in request body';
                return;
            }
        }

        const response = await fetch(url, options);
        const data = await response.json();
        responseElement.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        responseElement.innerHTML = `Error: ${error.message}`;
    }
}