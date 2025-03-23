import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Product quantity buttons
  const quantityBtns = document.querySelectorAll('.input-group button');
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input');
      const currentValue = parseInt(input.value);
      
      if (this.textContent === '+') {
        input.value = currentValue + 1;
      } else if (this.textContent === '-' && currentValue > 1) {
        input.value = currentValue - 1;
      }
    });
  });

  // Product image gallery
  const thumbnails = document.querySelectorAll('.thumbnail-images img');
  const mainImage = document.querySelector('.main-image img');
  
  if (thumbnails && mainImage) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        mainImage.src = this.src.replace('150', '600x400');
      });
    });
  }
});

// Add to cart animation
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
    if (this.textContent.includes('Add to Cart')) {
      this.classList.add('btn-success');
      this.innerHTML = '<i class="bi bi-check2"></i> Added';
      
      setTimeout(() => {
        this.classList.remove('btn-success');
        this.textContent = 'Add to Cart';
      }, 2000);
    }
  });
});