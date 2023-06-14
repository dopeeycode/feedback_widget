import { useState } from 'react'

import { feedbackTypes } from '../../utils/feedbackTypes'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'
import FeedbackContentStep from './Steps/FeedbackContentStep'

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg
     md:w-auto w-[calc(100vw-2rem)]"
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{' '}
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://github.com/dopeeycode"
          rel="noreferrer"
        >
          @dopeeycode
        </a>
      </footer>
    </div>
  )
}
