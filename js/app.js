// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // Project Filters
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.filters button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      // Filter projects with animation
      projectCards.forEach((card, index) => {
        const tags = card.dataset.tags.split(',').map(tag => tag.trim());
        const shouldShow = filter === 'all' || tags.includes(filter);

        if (shouldShow) {
          card.style.display = '';
          card.style.animation = 'none';
          // Trigger reflow
          card.offsetHeight;
          card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // Project Modal
  // ==========================================================================
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = modal?.querySelector('.modal-close');
  const modalOverlay = modal?.querySelector('.modal-overlay');
  const openProjectButtons = document.querySelectorAll('.open-project');

  // Project details data (can be replaced with API call)
  const projectDetails = {
    'project-1': {
      title: 'E-commerce Platform',
      description: 'A comprehensive online shopping platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure checkout, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux', 'Express'],
      features: [
        'Responsive design that works on all devices',
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'User reviews and ratings system',
        'Advanced product search and filtering',
        'Order tracking and history'
      ],
      image: 'img/placeholder-project.png'
    },
    'project-2': {
      title: 'Fitness Tracker App',
      description: 'A mobile application that helps users track their fitness journey. Set goals, log workouts, monitor progress with beautiful charts and statistics.',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'AsyncStorage'],
      features: [
        'Custom workout creation and scheduling',
        'Progress tracking with visual charts',
        'Social features to connect with friends',
        'Integration with health apps',
        'Achievement badges and milestones',
        'Offline mode support'
      ],
      image: 'img/placeholder-project.png'
    },
    'project-3': {
      title: 'Task Management Dashboard',
      description: 'A collaborative project management tool designed for teams. Organize tasks, track progress, and communicate seamlessly in one platform.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Vuex'],
      features: [
        'Kanban-style board view',
        'Real-time collaboration',
        'File attachments and comments',
        'Time tracking and reporting',
        'Custom workflows and automation',
        'Email notifications'
      ],
      image: 'img/placeholder-project.png'
    },
    'project-4': {
      title: 'Portfolio Website',
      description: 'A modern, minimal portfolio website with smooth animations and interactive elements. Built with performance and accessibility in mind.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
      features: [
        'Smooth scroll animations',
        'Responsive grid layout',
        'Dark theme with customizable colors',
        'Optimized images with lazy loading',
        'SEO friendly structure',
        'Fast load times'
      ],
      image: 'img/placeholder-project.png'
    },
    'project-5': {
      title: 'Weather App',
      description: 'Beautiful weather forecast application with location-based alerts and detailed meteorological data. Sleek UI with animated weather icons.',
      technologies: ['Swift', 'WeatherAPI', 'CoreLocation', 'SwiftUI'],
      features: [
        '7-day forecast with hourly breakdown',
        'Location-based automatic updates',
        'Severe weather alerts',
        'Multiple location support',
        'Beautiful animated weather icons',
        'Widget support'
      ],
      image: 'img/placeholder-project.png'
    },
    'project-6': {
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with markdown support, SEO optimization, and content management. Perfect for writers and content creators.',
      technologies: ['Next.js', 'MongoDB', 'Markdown', 'NextAuth', 'Tailwind CSS'],
      features: [
        'Markdown editor with live preview',
        'SEO optimization built-in',
        'Categories and tag system',
        'Comment system with moderation',
        'Social media sharing',
        'Analytics dashboard'
      ],
      image: 'img/placeholder-project.png'
    }
  };

  // Open modal
  openProjectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const projectId = e.currentTarget.dataset.id;
      const project = projectDetails[projectId];

      if (project && modalBody) {
        // Populate modal content
        modalBody.innerHTML = `
          <h3>${project.title}</h3>
          <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px; margin: 1rem 0; border: 1px solid var(--card-border);">
          <p>${project.description}</p>
          
          <h4 style="color: var(--accent); margin-top: 2rem;">Technologies Used</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `
              <span class="tag">${tech}</span>
            `).join('')}
          </div>
          
          <h4 style="color: var(--accent);">Key Features</h4>
          <ul style="line-height: 1.8;">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          
          <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <a href="#" class="btn primary">Live Demo</a>
            <a href="#" class="btn ghost">View Code</a>
          </div>
        `;

        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  const closeModal = () => {
    if (modal) {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // ==========================================================================
  // Contact Form
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      // Simulate form submission (replace with actual endpoint)
      try {
        // In a real application, you would send this to a server
        // await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });

        // Show success message
        formStatus.textContent = `Thank you for your message! I'll get back to you soon.`;
        formStatus.className = 'form-status success';
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          formStatus.style.display = 'none';
        }, 5000);
      } catch (error) {
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
        formStatus.className = 'form-status error';
      }
    });
  }

  // ==========================================================================
  // Smooth Scroll for Navigation Links
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for empty hash or just "#"
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // Intersection Observer for Scroll Animations
  // ==========================================================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // ==========================================================================
  // Add active state to navigation on scroll
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  const updateActiveNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav);

  // ==========================================================================
  // Console Easter Egg
  // ==========================================================================
  console.log('%c👋 Hello, Developer!', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
  console.log('%cLike what you see? Let\'s connect!', 'color: #9aa0a6; font-size: 14px;');
});
