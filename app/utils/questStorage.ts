import { UserQuestData } from '@/types/osrs';

//file name
const STORAGE_KEY = 'osrs_user_quest_data';

//make window error go byebye
function windowErrorCheck() {
    if (typeof window === 'undefined') return;
}

export function saveUserQuestData(username: string, completedQuests: string[]): void {
  windowErrorCheck()
  
  try {
    const data: UserQuestData = {
      username: username.toLowerCase(),
      completedQuests,
      lastUpdated: Date.now(),
    };

    // check if data (THIS IS NOT SMART LONG TERM LOL)
    const existingData = getAllUserQuestData();
    
    // update data
    const updatedData = {
      ...existingData,
      [username.toLowerCase()]: data,
    };
    
    //stringify make json error go byebye
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('literally hate your json data - fix it:', error);
  }
}

export function getUserQuestData(username: string): UserQuestData | null {
  windowErrorCheck()
  
  try {
    const allData = getAllUserQuestData();
    return allData[username.toLowerCase()] || null;
  } catch (error) {
    console.error('Y NO QUEST DATA?!:', error);
    return null;
  }
}

function getAllUserQuestData(): Record<string, UserQuestData> {
  windowErrorCheck()
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('No find quest data??:', error);
    return {};
  }
}

export function clearUserQuestData(username: string): void {
  windowErrorCheck()
  
  try {
    const allData = getAllUserQuestData();
    delete allData[username.toLowerCase()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  } catch (error) {
    console.error('quest data NO go byebye:', error);
  }
}