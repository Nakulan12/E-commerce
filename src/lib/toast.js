export const showToast = (message, type = "info") => {
  // Simple toast implementation
  const toast = document.createElement("div")
  toast.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
  }`
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    document.body.removeChild(toast)
  }, 3000)
}
