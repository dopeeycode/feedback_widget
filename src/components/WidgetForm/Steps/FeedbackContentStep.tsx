import { FeedbackType } from '..'
import { CloseButton } from '../../CloseButton'
import { feedbackTypes } from '../../../utils/feedbackTypes'
import { ArrowLeft } from 'phosphor-react'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export default function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

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
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] max-sm:min-w-[250px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100
        border-[#52525B] bg-transparent rounded-md border py-2 px-3 focus:border-brand-500
        focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        ></textarea>
      </form>
    </>
  )
}
