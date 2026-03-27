// ==========================================
// AB Studio - Main JavaScript File
// ==========================================

// Global Variables
let currentSelectedService = "";
let currentSelectedPrice = 0;

// Service Data with Online Images
const serviceData = {
    "Logo & Branding": {
        count: 10,
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
            "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500",
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500",
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=500",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
        ]
    },
    "Social Media Posts": {
        count: 20,
        images: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500",
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500",
            "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500",
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500",
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500",
            "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500",
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500",
            "https://images.unsplash.com/photo-1522542550221-31fd8575f5cb?w=500",
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500",
            "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500",
            "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=500"
        ]
    },
    "Flyers & Brochures": { 
        count: 20, 
        images: Array(20).fill("https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=500")
    },
    "Cover Pages": { 
        count: 20, 
        images: Array(20).fill("https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500")
    },
    "Web Design": { 
        count: 10, 
        images: Array(10).fill("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500")
    }
};

// ==========================================
// MODAL CONTROLS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const closeProfileModal = document.getElementById('closeProfileModal');

    if (loginBtn && modalOverlay) {
        loginBtn.addEventListener('click', () => modalOverlay.classList.add('active'));
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'));
    }

    if (closeProfileModal) {
        closeProfileModal.addEventListener('click', () => {
            document.getElementById('profileModal').classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        if (e.target.id === 'profileModal') document.getElementById('profileModal').classList.remove('active');
    });

    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    if (showSignup) {
        showSignup.addEventListener('click', () => {
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('signupSection').style.display = 'block';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', () => {
            document.getElementById('signupSection').style.display = 'none';
            document.getElementById('loginSection').style.display = 'block';
        });
    }

    // Initialize review slider
    initReviewSlider();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'si';
    changeLanguage(savedLang);
});

// ==========================================
// PAGE NAVIGATION LOGIC
// ==========================================
function hideAllSections() {
    const sections = [
        '#homeHero', '#homeServices', '#fullServicesPage', 
        '#portfolioDetail', '#orderFormSection', '#aboutSection', 
        '#portfolioSection', '#contactSection', '#trackingSection', 
        '#reviewsSection'
    ];
    sections.forEach(id => {
        const el = document.querySelector(id);
        if (el) el.style.display = 'none';
    });
}

function showHomePage() {
    hideAllSections();
    const homeHero = document.getElementById('homeHero');
    const homeServices = document.getElementById('homeServices');
    if (homeHero) homeHero.style.display = 'flex';
    if (homeServices) homeServices.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showServicesPage() {
    hideAllSections();
    const fullServices = document.getElementById('fullServicesPage');
    if (fullServices) fullServices.style.display = 'block';
    window.scrollTo(0, 0);
}

function showPortfolioPage() {
    hideAllSections();
    const portfolioSection = document.getElementById('portfolioSection');
    if (portfolioSection) portfolioSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function showAboutPage() {
    hideAllSections();
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) aboutSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function showContactPage() {
    hideAllSections();
    const contactSection = document.getElementById('contactSection');
    if (contactSection) contactSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function showTracking() {
    hideAllSections();
    const trackingSection = document.getElementById('trackingSection');
    if (trackingSection) trackingSection.style.display = 'block';
    window.scrollTo(0, 0);
}

function showReviews() {
    hideAllSections();
    const reviewsSection = document.getElementById('reviewsSection');
    if (reviewsSection) reviewsSection.style.display = 'block';
    window.scrollTo(0, 0);
}

// ==========================================
// PORTFOLIO & ORDER LOGIC
// ==========================================
function showPortfolio(serviceName) {
    const data = serviceData[serviceName];
    if (!data) return;

    hideAllSections();
    
    const detailSection = document.getElementById('portfolioDetail');
    const grid = document.getElementById('portfolioGrid');
    const titleHeader = document.getElementById('detailTitle');
    
    if (detailSection) detailSection.style.display = 'block';
    if (titleHeader) titleHeader.innerText = serviceName;
    if (grid) grid.innerHTML = "";

    data.images.forEach((imgSrc, index) => {
        const item = document.createElement('div');
        item.className = 'card';
        item.style.marginBottom = "20px";
        item.innerHTML = `
            <img src="${imgSrc}" alt="Design ${index + 1}" style="width:100%; height:250px; object-fit: cover; border-radius: 10px;" onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found'">
            <div style="padding: 15px; text-align: center;">
                <p style="font-weight: bold; margin-bottom: 10px;">Design #${index + 1}</p>
                <button onclick="placeOrder('${serviceName}', ${index + 1})" class="submit-btn" style="padding: 8px; font-size: 0.8rem; cursor: pointer;">Place Order</button>
            </div>
        `;
        if (grid) grid.appendChild(item);
    });
    window.scrollTo(0, 0);
}

function backToHome() {
    showHomePage();
}

function placeOrder(service, id) {
    const phone = "94704025586"; 
    const message = `Hello Ab Studio! I want to place an order for ${service} (Design ID: ${id})`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function showOrderForm() {
    hideAllSections();
    const formSection = document.getElementById('orderFormSection');
    if (formSection) {
        formSection.style.display = 'block';
        // Pre-fill user data if logged in
        if (typeof currentUserData !== 'undefined' && currentUserData) {
            document.getElementById('fullName').value = currentUserData.name || '';
            document.getElementById('phone').value = currentUserData.phone || '';
            document.getElementById('email').value = currentUserData.email || '';
        }
    }
    window.scrollTo(0, 0);
}

function backToPortfolio() {
    hideAllSections();
    const portfolioDetail = document.getElementById('portfolioDetail');
    if (portfolioDetail) portfolioDetail.style.display = 'block';
}

function processOrder(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const sizeInput = document.getElementById('designSize').value.toUpperCase();
    const formatInput = document.getElementById('fileFormat').value;
    const coverDetails = document.getElementById('coverDetails').value;
    
    let finalPrice = currentSelectedPrice || 0; 
    
    if (sizeInput.includes('A3')) {
        finalPrice = 1000;
    } else if (sizeInput.includes('A4')) {
        finalPrice = 750;
    }

    if (formatInput.includes('PSD')) {
        finalPrice += 250;
    }

    const details = `Size: ${sizeInput || 'Standard'}, Format: ${formatInput}${coverDetails ? ', Details: ' + coverDetails : ''}`;
    
    const url = `payment.html?service=${encodeURIComponent(currentSelectedService)}&price=${finalPrice}&name=${encodeURIComponent(fullName)}&details=${encodeURIComponent(details)}`;
    window.location.href = url;
}

function openOrderForm(serviceName, price) {
    currentSelectedService = serviceName;
    currentSelectedPrice = price;
    hideAllSections();
    const formSection = document.getElementById('orderFormSection');
    if (formSection) {
        formSection.style.display = 'block';
        // Pre-fill user data if logged in
        if (typeof currentUserData !== 'undefined' && currentUserData) {
            const fullNameInput = document.getElementById('fullName');
            const phoneInput = document.getElementById('phone');
            const emailInput = document.getElementById('email');
            if (fullNameInput) fullNameInput.value = currentUserData.name || '';
            if (phoneInput) phoneInput.value = currentUserData.phone || '';
            if (emailInput) emailInput.value = currentUserData.email || '';
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// SEARCH & FILTERING
// ==========================================
function searchServices() {
    let input = document.getElementById('serviceSearch');
    if (!input) return;
    
    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName('service-item');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3');
        let desc = cards[i].querySelector('p');
        
        if (title && desc) {
            let titleText = title.innerText.toLowerCase();
            let descText = desc.innerText.toLowerCase();
            
            if (titleText.includes(filter) || descText.includes(filter)) {
                cards[i].style.display = "block";
                cards[i].classList.add('show');
            } else {
                cards[i].style.display = "none";
                cards[i].classList.remove('show');
            }
        }
    }
}

function filterPortfolio(category) {
    const items = document.querySelectorAll('#mainPortfolioGrid .portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
        }
    });
}

// ==========================================
// REVIEW SLIDER
// ==========================================
let currentIdx = 0;
let reviewTimer;

function initReviewSlider() {
    const slider = document.getElementById('reviewSlider');
    const reviewCards = document.querySelectorAll('.review-card');
    
    if (slider && reviewCards.length > 0) {
        reviewTimer = setInterval(nextReview, 5000);
        slider.parentElement.addEventListener('mouseenter', () => clearInterval(reviewTimer));
        slider.parentElement.addEventListener('mouseleave', () => {
            reviewTimer = setInterval(nextReview, 5000);
        });
    }
}

function updateSlider() {
    const slider = document.getElementById('reviewSlider');
    const reviewCards = document.querySelectorAll('.review-card');
    if (slider && reviewCards.length > 0) {
        slider.style.transform = `translateX(-${currentIdx * 100}%)`;
    }
}

function nextReview() {
    const reviewCards = document.querySelectorAll('.review-card');
    if (reviewCards.length > 0) {
        currentIdx = (currentIdx + 1) % reviewCards.length;
        updateSlider();
    }
}

function prevReview() {
    const reviewCards = document.querySelectorAll('.review-card');
    if (reviewCards.length > 0) {
        currentIdx = (currentIdx - 1 + reviewCards.length) % reviewCards.length;
        updateSlider();
    }
}

// ==========================================
// ORDER TRACKING (Real-time from Firebase)
// ==========================================
async function trackOrder() {
    const idInput = document.getElementById('orderIDInput');
    if (!idInput) return;
    
    const id = idInput.value.trim().toUpperCase();
    const resultArea = document.getElementById('trackingResult');
    const msg = document.getElementById('trackMessage');
    const bar = document.getElementById('progressBar');
    const orderDetails = document.getElementById('orderDetails');

    if (!id) {
        if (msg) {
            msg.innerText = "කරුණාකර ඇණවුම් අංකයක් ඇතුළත් කරන්න.";
            msg.style.color = "red";
        }
        if (resultArea) resultArea.style.display = 'none';
        if (orderDetails) orderDetails.style.display = 'none';
        return;
    }

    // Check if Firebase is available
    if (typeof db === 'undefined') {
        // Fallback to local demo data
        const demoOrders = {
            'AB-1001': { step: 2, status: 'Designing', service: 'Logo Design', customer: 'Kamal', date: '2026-03-20', amount: '2500' },
            'AB-1002': { step: 4, status: 'Completed', service: 'Social Media Post', customer: 'Nimali', date: '2026-03-18', amount: '1000' },
            'AB-1003': { step: 1, status: 'Pending', service: 'Flyer Design', customer: 'Sahan', date: '2026-03-25', amount: '1500' }
        };
        
        if (demoOrders[id]) {
            displayTrackingResult(demoOrders[id], id);
        } else {
            if (msg) {
                msg.innerText = "කණගාටුයි, එවැනි ඇණවුම් අංකයක් සොයාගත නොහැකි විය.";
                msg.style.color = "red";
            }
            if (resultArea) resultArea.style.display = 'none';
            if (orderDetails) orderDetails.style.display = 'none';
        }
        return;
    }

    try {
        const orderDoc = await db.collection('orders').doc(id).get();
        
        if (orderDoc.exists) {
            const orderData = orderDoc.data();
            const statusSteps = {
                'Pending': 1,
                'Designing': 2,
                'Review': 3,
                'Completed': 4,
                'Delivered': 4
            };
            
            const trackingInfo = {
                step: statusSteps[orderData.status] || 1,
                status: orderData.status,
                service: orderData.service,
                customer: orderData.customerName,
                date: orderData.date ? new Date(orderData.date).toLocaleDateString() : 'N/A',
                amount: orderData.price
            };
            
            displayTrackingResult(trackingInfo, id);
        } else {
            if (msg) {
                msg.innerText = "කණගාටුයි, එවැනි ඇණවුම් අංකයක් සොයාගත නොහැකි විය.";
                msg.style.color = "red";
            }
            if (resultArea) resultArea.style.display = 'none';
            if (orderDetails) orderDetails.style.display = 'none';
        }
    } catch (error) {
        console.error("Error tracking order:", error);
        if (msg) {
            msg.innerText = "දෝෂයක් ඇති විය. නැවත උත්සාහ කරන්න.";
            msg.style.color = "red";
        }
    }
}

function displayTrackingResult(order, trackingId) {
    const resultArea = document.getElementById('trackingResult');
    const msg = document.getElementById('trackMessage');
    const bar = document.getElementById('progressBar');
    const orderDetails = document.getElementById('orderDetails');
    const stepNum = order.step;

    if (resultArea) resultArea.style.display = 'flex';
    if (orderDetails) orderDetails.style.display = 'block';
    if (msg) {
        msg.style.color = "#6c5ce7";
        msg.innerText = getStatusMessage(order.status);
    }

    // Update progress bar
    if (bar) {
        const progressWidth = ((stepNum - 1) / 3) * 100;
        bar.style.width = progressWidth + '%';
    }

    // Update steps
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.getElementById('step' + i);
        if (stepEl) {
            stepEl.classList.remove('active', 'completed');
            if (i < stepNum) stepEl.classList.add('completed');
            if (i === stepNum) stepEl.classList.add('active');
        }
    }

    // Display order details
    const trackService = document.getElementById('trackService');
    const trackCustomer = document.getElementById('trackCustomer');
    const trackDate = document.getElementById('trackDate');
    const trackAmount = document.getElementById('trackAmount');

    if (trackService) trackService.textContent = order.service || 'N/A';
    if (trackCustomer) trackCustomer.textContent = order.customer || 'N/A';
    if (trackDate) trackDate.textContent = order.date || 'N/A';
    if (trackAmount) trackAmount.textContent = order.amount ? 'LKR ' + order.amount : 'N/A';
}

function getStatusMessage(status) {
    const messages = {
        'Pending': 'ඇණවුම ලැබුණා. ඉක්මනින් වැඩ ආරම්භ කරනු ඇත.',
        'Designing': 'ඔබේ නිර්මාණය දැනට සකස් වෙමින් පවතී...',
        'Review': 'නිර්මාණය සමාලෝචනයට ඉදිරිපත් කර ඇත.',
        'Completed': 'නිර්මාණය අවසන්! ඔබට දැන් එය ලබා ගත හැක.',
        'Delivered': 'නිර්මාණය බාරදී ඇත.'
    };
    return messages[status] || 'ස්ථිතිය නොදනී.';
}

// ==========================================
// CONTACT FORM
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName')?.value;
            const contactInfo = document.getElementById('contactInfo')?.value;
            const message = document.getElementById('contactMessage')?.value;
            
            // Send to WhatsApp
            const phone = "94704025586";
            const whatsappMsg = `Hello AB Studio!%0A%0A*New Message*%0AName: ${name}%0AContact: ${contactInfo}%0AMessage: ${message}`;
            window.open(`https://wa.me/${phone}?text=${whatsappMsg}`, '_blank');
            
            alert('ස්තූතියි! ඔබේ පණිවිඩය අප වෙත ලැබුණා. ඉක්මනින් සම්බන්ධ වන්නෙමු.');
            this.reset();
        });
    }
});

// ==========================================
// LANGUAGE SWITCHER
// ==========================================
function changeLanguage(lang) {
    // Update button states
    const btnSi = document.getElementById('btn-si');
    const btnEn = document.getElementById('btn-en');
    
    if (btnSi) btnSi.classList.toggle('active', lang === 'si');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
    
    // Update content (if data attributes are present)
    const elements = document.querySelectorAll('[data-si][data-en]');
    elements.forEach(el => {
        el.innerText = lang === 'si' ? el.getAttribute('data-si') : el.getAttribute('data-en');
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#00b894' : type === 'error' ? '#d63031' : '#6c5ce7'};
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
