import { FeedbackType } from '..'
import { CloseButton } from '../../CloseButton'
import { feedbackTypes } from '../../../utils/feedbackTypes'
import { ArrowLeft } from 'phosphor-react'
import ScreenshotButton from '../ScreenshotButton'
import { useState, FormEvent } from 'react'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export default function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()

    console.log({
      comment,
      screenshot,
    })

    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 ">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="mt-4 my-2 w-full">
        <textarea
          className="min-w-[304px] max-sm:min-w-[250px] w-full min-h-[112px] text-sm placeholder-zinc-400 
          text-zinc-100 border-[#52525B] bg-transparent rounded-md border py-2 px-3 focus:border-brand-500
        focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700
          scrollbar-track-transparent scrollbar-thin"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 w-full">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={!comment}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center 
            items-centertext-sm hover:bg-[#996DFF] transition-colors focus:ring-2 focus:ring-offset-2 
          focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-60 disabled:hover:bg-brand-500
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
