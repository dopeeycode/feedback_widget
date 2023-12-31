import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import Loading from '../Loading'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export default function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshotTook(base64Image)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400
      hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 140,
        }}
      >
        <Trash onClick={() => onScreenshotTook(null)} weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 border-transparent rounded-md hover:bg-zinc-700 transition-colors
          focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  )
}
