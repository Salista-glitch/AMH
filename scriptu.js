// Enhanced animations and interactions
document.addEventListener("DOMContentLoaded", () => {
  // Add interactive hover effects to the elephant
  const elephant = document.querySelector(".elephant-svg")
  const elephantContainer = document.querySelector(".elephant-container")

  elephantContainer.addEventListener("mouseenter", () => {
    elephant.style.animationDuration = "2s"
    elephant.style.transform = "translateX(-50%) scale(1.1)"
  })

  elephantContainer.addEventListener("mouseleave", () => {
    elephant.style.animationDuration = "4s"
    elephant.style.transform = "translateX(-50%) scale(1)"
  })

  // Add click interaction to elephant
  elephantContainer.addEventListener("click", () => {
    elephant.style.animation = "none"
    setTimeout(() => {
      elephant.style.animation = "elephantBob 4s ease-in-out infinite"
    }, 100)

    // Create celebration particles
    createCelebrationParticles()
  })

  // Parallax effect for background elements
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".sand-dune, .baobab-tree, .cloud")

    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Dynamic particle generation
  function createCelebrationParticles() {
    const particlesContainer = document.querySelector(".particles")

    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div")
      particle.className = "celebration-particle"
      particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${getRandomColor()};
                border-radius: 50%;
                top: 50%;
                left: 50%;
                pointer-events: none;
                animation: celebrationBurst 2s ease-out forwards;
                transform: translate(-50%, -50%);
            `

      particlesContainer.appendChild(particle)

      // Remove particle after animation
      setTimeout(() => {
        particle.remove()
      }, 2000)
    }
  }

  function getRandomColor() {
    const colors = ["#F39C12", "#E67E22", "#E74C3C", "#27AE60", "#3498DB"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Add celebration burst animation
  const style = document.createElement("style")
  style.textContent = `
        @keyframes celebrationBurst {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5) translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px);
            }
        }
    `
  document.head.appendChild(style)

  // Button interactions
  const buttons = document.querySelectorAll(".cta-primary, .cta-secondary")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.05)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
      // Add a small delay for the ripple effect before navigation
      if (this.classList.contains("cta-primary")) {
        setTimeout(() => {
          window.open(this.href, "_blank")
        }, 200)
        e.preventDefault()
      }
    })
  })

  // Add ripple animation
  const rippleStyle = document.createElement("style")
  rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(rippleStyle)

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  // Observe animated elements
  const animatedElements = document.querySelectorAll(".elephant-svg, .content-box, .african-pattern, .montessori-block")
  animatedElements.forEach((el) => observer.observe(el))

  // Dynamic time-based effects
  function updateTimeBasedEffects() {
    const hour = new Date().getHours()
    const heroContainer = document.querySelector(".hero-container")

    // Adjust colors based on time of day
    if (hour >= 6 && hour < 12) {
      // Morning - brighter colors
      heroContainer.style.filter = "brightness(1.1) saturate(1.2)"
    } else if (hour >= 12 && hour < 18) {
      // Afternoon - normal colors
      heroContainer.style.filter = "brightness(1) saturate(1)"
    } else {
      // Evening/Night - warmer, dimmer colors
      heroContainer.style.filter = "brightness(0.9) saturate(0.8) hue-rotate(10deg)"
    }
  }

  updateTimeBasedEffects()

  // Add mouse movement parallax
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth
    const mouseY = e.clientY / window.innerHeight

    const elephant = document.querySelector(".elephant-container")
    const patterns = document.querySelectorAll(".african-pattern")
    const blocks = document.querySelectorAll(".montessori-block")

    // Subtle elephant movement
    elephant.style.transform = `translateX(calc(-50% + ${(mouseX - 0.5) * 20}px)) translateY(${(mouseY - 0.5) * 10}px)`

    // Pattern movement
    patterns.forEach((pattern, index) => {
      const speed = (index + 1) * 0.5
      pattern.style.transform = `translate(${(mouseX - 0.5) * speed * 10}px, ${(mouseY - 0.5) * speed * 10}px)`
    })

    // Block movement
    blocks.forEach((block, index) => {
      const speed = (index + 1) * 0.3
      block.style.transform = `translate(${(mouseX - 0.5) * speed * 15}px, ${(mouseY - 0.5) * speed * 15}px)`
    })
  })
})

// Enhanced interactions for new sections
document.addEventListener("DOMContentLoaded", () => {
  // Plant Garden Interactions
  const plants = document.querySelectorAll(".garden-plant")
  plants.forEach((plant) => {
    plant.addEventListener("click", function () {
      const letter = this.dataset.letter

      // Create letter celebration
      createLetterCelebration(letter, this)

      // Plant wiggle animation
      this.style.animation = "none"
      setTimeout(() => {
        this.style.animation = "plantSway 4s ease-in-out infinite"
      }, 100)
    })

    plant.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2) rotate(5deg)"
      this.querySelector(".plant-svg").style.filter =
        "drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3)) brightness(1.2) saturate(1.3)"
    })

    plant.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
      this.querySelector(".plant-svg").style.filter = "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))"
    })
  })

  // Program Tiles Hover Effects
  const programTiles = document.querySelectorAll(".program-tile")
  programTiles.forEach((tile) => {
    tile.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-20px) scale(1.03)"
      this.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.25)"
    })

    tile.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0px) scale(1)"
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)"
    })
  })

  // Journey Map Interactions
  const journeyStops = document.querySelectorAll(".journey-stop")
  journeyStops.forEach((stop, index) => {
    stop.addEventListener("click", function () {
      // Highlight the learning path
      createPathHighlight(index)

      // Stop bounce effect
      this.style.animation = "none"
      setTimeout(() => {
        this.style.animation = "stopPulse 3s ease-in-out infinite"
      }, 100)
    })
  })

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")

        // Special animations for different sections
        if (entry.target.classList.contains("plant-garden-section")) {
          animatePlantsSequence()
        } else if (entry.target.classList.contains("program-tiles-section")) {
          animateTilesSequence()
        } else if (entry.target.classList.contains("journey-map-section")) {
          animateJourneySequence()
        }
      }
    })
  }, observerOptions)

  // Observe all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => sectionObserver.observe(section))

  // Helper Functions
  function createLetterCelebration(letter, element) {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div")
      particle.textContent = letter
      particle.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        font-size: 2rem;
        font-weight: bold;
        color: ${getRandomColor()};
        pointer-events: none;
        z-index: 1000;
        animation: letterBurst 2s ease-out forwards;
        transform: translate(-50%, -50%);
      `

      document.body.appendChild(particle)

      setTimeout(() => particle.remove(), 2000)
    }
  }

  function createPathHighlight(stopIndex) {
    const path = document.querySelector(".journey-path path")
    if (path) {
      path.style.stroke = "#F39C12"
      path.style.strokeWidth = "6"
      path.style.filter = "drop-shadow(0 0 10px rgba(243, 156, 18, 0.6))"

      setTimeout(() => {
        path.style.stroke = "#D35400"
        path.style.strokeWidth = "4"
        path.style.filter = "none"
      }, 2000)
    }
  }

  function animatePlantsSequence() {
    const plants = document.querySelectorAll(".garden-plant")
    plants.forEach((plant, index) => {
      setTimeout(() => {
        plant.style.transform = "scale(1.1)"
        setTimeout(() => {
          plant.style.transform = "scale(1)"
        }, 300)
      }, index * 200)
    })
  }

  function animateTilesSequence() {
    const tiles = document.querySelectorAll(".program-tile")
    tiles.forEach((tile, index) => {
      setTimeout(() => {
        tile.style.transform = "translateY(-10px) scale(1.02)"
        setTimeout(() => {
          tile.style.transform = "translateY(0) scale(1)"
        }, 500)
      }, index * 150)
    })
  }

  function animateJourneySequence() {
    const stops = document.querySelectorAll(".journey-stop")
    stops.forEach((stop, index) => {
      setTimeout(() => {
        stop.style.transform = "scale(1.2)"
        setTimeout(() => {
          stop.style.transform = "scale(1)"
        }, 400)
      }, index * 300)
    })
  }

  function getRandomColor() {
    const colors = ["#F39C12", "#E67E22", "#E74C3C", "#27AE60", "#3498DB", "#9B59B6"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Add letter burst animation
  const letterStyle = document.createElement("style")
  letterStyle.textContent = `
    @keyframes letterBurst {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.5) rotate(180deg) 
                   translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.5) rotate(360deg) 
                   translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px);
      }
    }
    
    .animate-in {
      animation: sectionFadeIn 1s ease-out forwards;
    }
    
    @keyframes sectionFadeIn {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
  document.head.appendChild(letterStyle)

  // Background whimsy interactions
  const drums = document.querySelectorAll(".floating-drum")
  drums.forEach((drum) => {
    drum.addEventListener("click", function () {
      this.style.animation = "none"
      this.style.transform = "scale(1.3) rotate(15deg)"

      setTimeout(() => {
        this.style.animation = "drumBounce 4s ease-in-out infinite"
        this.style.transform = "scale(1) rotate(0deg)"
      }, 300)
    })
  })
})
