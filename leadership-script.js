// Smooth scroll for navigation
document.addEventListener("DOMContentLoaded", () => {
  // Scroll indicator click
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    })
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Parallax effect on scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroPattern = document.querySelector(".hero-pattern")

    if (heroPattern) {
      heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Gallery lightbox effect
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Add scale animation on click
      item.style.transform = "scale(0.95)"
      setTimeout(() => {
        item.style.transform = "scale(1)"
      }, 200)
    })
  })

  // Team member card animations
  const teamMembers = document.querySelectorAll(".team-member")
  teamMembers.forEach((member, index) => {
    member.style.animationDelay = `${index * 0.2}s`
  })

  // Objective cards stagger animation
  const objectiveCards = document.querySelectorAll(".objective-card")
  objectiveCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  // Learning cards stagger animation
  const learningCards = document.querySelectorAll(".learning-card")
  learningCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`
  })

  // Add hover sound effect simulation (visual feedback)
  const interactiveElements = document.querySelectorAll(".objective-card, .learning-card, .team-member, .gallery-item")
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    })
  })

  // Smooth reveal for deliverables list
  const deliverablesList = document.querySelectorAll(".deliverables-list li")
  const listObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateX(0)"
          }, index * 100)
        }
      })
    },
    { threshold: 0.5 },
  )

  deliverablesList.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-20px)"
    item.style.transition = "all 0.5s ease"
    listObserver.observe(item)
  })

  // Pillar line animation on scroll
  const pillars = document.querySelectorAll(".pillar")
  const pillarObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const line = entry.target.querySelector(".pillar-line")
          line.style.animation = "growHeight 1.5s ease-out forwards"
        }
      })
    },
    { threshold: 0.5 },
  )

  pillars.forEach((pillar) => {
    pillarObserver.observe(pillar)
  })

  // Quote section fade in
  const quoteContainer = document.querySelector(".quote-container")
  const quoteObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.3 },
  )

  if (quoteContainer) {
    quoteContainer.style.opacity = "0"
    quoteContainer.style.transform = "translateY(30px)"
    quoteContainer.style.transition = "all 1s ease"
    quoteObserver.observe(quoteContainer)
  }

  // Add dynamic background patterns
  const createFloatingShapes = () => {
    const shapes = ["circle", "triangle", "square"]
    const colors = ["var(--primary-gold)", "var(--primary-orange)", "var(--terracotta)"]

    // You can add floating decorative shapes here if desired
  }

  createFloatingShapes()

  // Gallery masonry effect on load
  setTimeout(() => {
    galleryItems.forEach((item, index) => {
      item.style.opacity = "1"
      item.style.transform = "scale(1)"
    })
  }, 300)

  // Initialize gallery items with scale 0
  galleryItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "scale(0.8)"
    item.style.transition = "all 0.5s ease"
  })
})

// Add scroll progress indicator
window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100

  // You can add a progress bar if desired
})

// Email link protection
document.addEventListener("DOMContentLoaded", () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]')
  emailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Track email clicks if needed
      console.log("Email link clicked")
    })
  })
})
