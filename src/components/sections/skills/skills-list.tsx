import { ISkill } from '@/data/skillsList'
import { SkillCard } from './skill-card'

interface SkillsListProps {
  list: ISkill[]
}

export function SkillsList({ list }: SkillsListProps) {
  return (
    <div className="flex w-full flex-col pb-4 pt-1 text-light-darker sm:flex-row">
      <div className="grid w-full grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2">
        {list.map((item) => (
          <SkillCard skill={item} key={item.name} />
        ))}
      </div>
    </div>
  )
}
