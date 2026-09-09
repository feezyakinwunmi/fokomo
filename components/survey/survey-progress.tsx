type Props = {
  current: number
  total: number
}

export default function SurveyProgress({ current, total }: Props) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs font-medium">
        <span className="text-zinc-500">
          Question {current} of {total}
        </span>

        <span>{percentage}%</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-zinc-950 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}