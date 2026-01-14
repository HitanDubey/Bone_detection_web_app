// File upload handling
document.addEventListener('DOMContentLoaded', function() {
    const fileUploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.querySelector('.file-input');
    const filePreview = document.getElementById('filePreview');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const form = document.querySelector('.upload-form');

    // Drag and drop functionality
    fileUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    fileUploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });

    fileUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            handleFileSelect(files[0]);
        }
    });

    fileInput.addEventListener('change', function(e) {
        if (this.files.length > 0) {
            handleFileSelect(this.files[0]);
        }
    });

    function handleFileSelect(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                filePreview.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <p style="color: white; margin-top: 0.5rem;">${file.name}</p>
                `;
            };
            reader.readAsDataURL(file);
        }
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        const file = fileInput.files[0];
        const name = document.getElementById('name').value;
        
        if (!name || !file) {
            e.preventDefault();
            alert('Please fill all fields');
            return;
        }

        // Show loading animation
        loadingOverlay.style.display = 'flex';
        
        // Animate stats
        animateStats();
    });

    // Animate statistics numbers
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = target === 99.2 ? current.toFixed(1) + '%' : Math.floor(current).toLocaleString();
            }, 16);
        });
    }

    // Initialize stats animation on page load
    animateStats();
});