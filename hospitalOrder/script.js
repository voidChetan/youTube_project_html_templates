// Toggle Sidebar
document.getElementById('sidebarCollapse').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Show/Hide Pages
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';

    // Show default tabs
    if (pageId === 'employees') {
        showEmployeeTab('list');
    } else if (pageId === 'orders') {
        showOrderTab('list');
    }
}

// Employee Tab Management
function showEmployeeTab(tabId) {
    const list = document.getElementById('employeeList');
    const form = document.getElementById('employeeForm');
    const listBtn = document.querySelector('button[onclick="showEmployeeTab(\'list\')"]');
    const formBtn = document.querySelector('button[onclick="showEmployeeTab(\'form\')"]');

    if (tabId === 'list') {
        list.style.display = 'block';
        form.style.display = 'none';
        listBtn.classList.add('btn-primary');
        listBtn.classList.remove('btn-outline-primary');
        formBtn.classList.add('btn-outline-primary');
        formBtn.classList.remove('btn-primary');
    } else {
        list.style.display = 'none';
        form.style.display = 'block';
        formBtn.classList.add('btn-primary');
        formBtn.classList.remove('btn-outline-primary');
        listBtn.classList.add('btn-outline-primary');
        listBtn.classList.remove('btn-primary');
    }
}

// Order Tab Management
function showOrderTab(tabId) {
    const list = document.getElementById('orderList');
    const form = document.getElementById('orderForm');
    const listBtn = document.querySelector('button[onclick="showOrderTab(\'list\')"]');
    const formBtn = document.querySelector('button[onclick="showOrderTab(\'form\')"]');

    if (tabId === 'list') {
        list.style.display = 'block';
        form.style.display = 'none';
        listBtn.classList.add('btn-primary');
        listBtn.classList.remove('btn-outline-primary');
        formBtn.classList.add('btn-outline-primary');
        formBtn.classList.remove('btn-primary');
    } else {
        list.style.display = 'none';
        form.style.display = 'block';
        formBtn.classList.add('btn-primary');
        formBtn.classList.remove('btn-outline-primary');
        listBtn.classList.add('btn-outline-primary');
        listBtn.classList.remove('btn-primary');
    }
}

// Add Order Detail Row
function addOrderDetail() {
    const orderDetails = document.getElementById('orderDetails');
    const newDetail = document.createElement('div');
    newDetail.className = 'order-detail-item row mb-3';
    newDetail.innerHTML = `
        <div class="col-md-3">
            <label class="form-label">Medicine ID</label>
            <input type="number" class="form-control" name="medicineId[]" required>
        </div>
        <div class="col-md-3">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" name="quantity[]" required>
        </div>
        <div class="col-md-3 d-flex align-items-end">
            <button type="button" class="btn btn-danger btn-remove-item" onclick="removeOrderDetail(this)">
                <i class="bi bi-trash"></i> Remove
            </button>
        </div>
    `;
    orderDetails.appendChild(newDetail);
}

// Remove Order Detail Row
function removeOrderDetail(button) {
    button.closest('.order-detail-item').remove();
}

// Form Validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});

// Initialize the dashboard view
document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');
});