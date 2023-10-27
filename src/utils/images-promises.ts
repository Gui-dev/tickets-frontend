export const readImageAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      const base64String = event.target?.result as string
      resolve(base64String)
    }

    reader.onerror = (event) => {
      reject(new Error('Erro ao ler a imagem como base64'))
    }

    reader.readAsDataURL(file)
  })
}
