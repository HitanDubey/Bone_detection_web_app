// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setAnalysisTime();
    initializeHotspots();
    initializeStaggerAnimations();
});

// Set current analysis time
function setAnalysisTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('analysisTime').textContent = timeString;
}

// Initialize staggered animations
function initializeStaggerAnimations() {
    // Symptoms list animation
    const symptoms = document.querySelectorAll('.symptom-item');
    symptoms.forEach((item, index) => {
        item.style.setProperty('--item-delay', `${0.3 + index * 0.1}s`);
    });

    // Stats cards animation
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.setProperty('--stat-delay', `${0.5 + index * 0.1}s`);
    });

    // Timeline items animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--timeline-delay', `${0.7 + index * 0.2}s`);
    });

    // Result cards animation
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
        card.style.setProperty('--delay', `${0.9 + index * 0.15}s`);
    });
}

// Initialize hotspot interactions
function initializeHotspots() {
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function() {
            const hasFracture = this.getAttribute('data-fracture') === 'true';
            showHotspotInfo(hasFracture, this.getBoundingClientRect());
        });
    });
}

// Show hotspot information
function showHotspotInfo(hasFracture, position) {
    const message = hasFracture ? 
        'Potential fracture detected in this area' : 
        'No significant abnormalities detected';
    
    const color = hasFracture ? '#ff4444' : '#00C851';
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        top: ${position.top - 50}px;
        left: ${position.left}px;
        background: ${color};
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    tooltip.textContent = message;
    
    document.body.appendChild(tooltip);
    
    // Remove tooltip after 3 seconds,      This web_app develop by a delhi technical student, name - (Vipul Dubey or Hitan dubey)
    setTimeout(() => {
        tooltip.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => tooltip.remove(), 300);
    }, 3000);
}

// Tab functionality
function openTab(tabName) {
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab and activate button
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Image modal functions
function zoomImage() {
    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Action functions
function downloadImage() {
    // Simulate download
    showNotification('Downloading X-ray image...', 'success');
}

function shareResults() {
    // Simulate share functionality
    showNotification('Share options opened', 'info');
}

function saveResults() {
    showNotification('Results saved successfully!', 'success');
}

function consultSpecialist() {
    showNotification('Connecting you with a specialist...', 'info');
}

function generatePDF() {
    showNotification('Generating PDF report...', 'success');
}

function printReport() {
    window.print();
}

function emailReport() {
    showNotification('Email report dialog opened', 'info');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#00C851',
        error: '#ff4444',
        warning: '#ffbb33',
        info: '#33b5e5'
    };
    return colors[type] || '#33b5e5';
}

// Initialize all animations
function initializeAnimations() {
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        @keyframes fadeOut {
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Print styles
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});