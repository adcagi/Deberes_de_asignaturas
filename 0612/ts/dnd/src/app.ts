document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll<HTMLElement>(".card")
  const columns = document.querySelectorAll<HTMLElement>(".column")

  let draggedCard: HTMLElement | null = null

  const placeholder: HTMLDivElement = document.createElement("div")
  placeholder.classList.add("placeholder")


  cards.forEach(card => {

    card.addEventListener("dragstart", () => {
      draggedCard = card
      setTimeout(() => {
        card.style.display = "none"
      }, 0)
    })

    card.addEventListener("dragend", () => {
      if (draggedCard) {
        draggedCard.style.display = "block"
      }
      placeholder.remove()
    })

  })

  columns.forEach(column => {

    column.addEventListener("dragenter", () => {
      column.classList.add("highlight")
    })

    column.addEventListener("dragleave", () => {
      column.classList.remove("highlight")
    })

    column.addEventListener("dragover", (e: DragEvent) => {
      e.preventDefault()

      const afterElement = getDragAfterElement(column, e.clientY)

      if (afterElement == null) {
        column.appendChild(placeholder)
      } else {
        column.insertBefore(placeholder, afterElement)
      }
    })

    column.addEventListener("drop", () => {

      column.classList.remove("highlight")

      if (!draggedCard) return

      if (placeholder.parentNode) {
        placeholder.parentNode.insertBefore(draggedCard, placeholder)
        placeholder.remove()
      } else {
        column.appendChild(draggedCard)
      }

    })

  })


  function getDragAfterElement(container: HTMLElement, y: number): HTMLElement | null {

    const elements = [
      ...container.querySelectorAll<HTMLElement>(".card:not(.dragging)")
    ]

    const result = elements.reduce(
      (closest, child) => {

        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }

      },
      { offset: Number.NEGATIVE_INFINITY, element: null as HTMLElement | null }
    )

    return result.element
  }

})