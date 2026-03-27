export function useScrollAnimation() {
  function initScrollAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe on mount and after route changes
    function observeElements() {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer.observe(el))
    }

    observeElements()

    // Re-observe after DOM mutations
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  }

  return { initScrollAnimation }
}
