import { feedbackTypes } from '../../../utils/feedbackTypes'
import { CloseButton } from '../../CloseButton'

type FeedbackType = keyof typeof feedbackTypes
interface FeebackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export default function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeebackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, item]) => {
          return (
            <button
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={item.id}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col gap-2 flex-1 items-center border-2 
            border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500"
              type="button"
            >
              <img src={item.image.source} alt={item.image.alt} />
              <span>{item.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
