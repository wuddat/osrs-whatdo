import activityData from '@/data/activities.json'
import { PlayerStats } from '@/types/osrs'
import { UserQuestData } from '@/types/osrs'

export type Activity = {
  slug: string;
  title: string;
  text?: string;
  requirements?: {
    quests?: string;
    questslug?: string[];
    skills?: string[];
    skillLevels?: number[];
  };
};

function randomizer() {
    const qty: number = activityData.length-1
    return Math.floor(Math.random()* qty)
}

export function metSkillReqs(
    playerSkills: PlayerStats['skills'],
    reqSkills?: string[] | null,
    reqLevels?: number[] | null
): boolean {
    if (!reqSkills || reqSkills.length === 0) return true;

    return reqSkills.every((skill, i) => {
        const required = reqLevels?.[i] ?? 1;
        return playerSkills[skill].level >= required;
    })
}

export function metQuestReqs(
    playerQuests: UserQuestData['completedQuests'],
    reqQuests?: string[] | null,
): boolean {
    if (!reqQuests || reqQuests.length === 0) return true;

    return reqQuests.every((quest) => {
        return playerQuests.includes(quest)
    })
}

export function activitySelector(
    playerSkills: PlayerStats['skills'],
    playerQuests: UserQuestData['completedQuests'],

) {
    var counter = 0;
    while (counter < 10) {
        const i = randomizer()
        console.log(i)
        console.log(activityData[i].title)
        console.log('counter: ', counter)

        const activity = activityData[i]
        console.log(activity)
        
        if (metSkillReqs(playerSkills,activity.requirements.skills,activity.requirements.skillLevels) && metQuestReqs(playerQuests,activity.requirements.questslug)) {
            return activity.slug
        } else {
            counter++
            console.log('activity find failed, trying again...')
        }
    }
}