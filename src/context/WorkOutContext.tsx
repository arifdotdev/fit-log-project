import { ILibrary } from "@/type/library.type";
import { createContext, ReactNode, useState } from "react";

interface WorkoutContextType {
    addToWorkout: ILibrary[];
    setAddToWorkout: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    saveForLater: ILibrary[];
    setSaveForLater: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [addToWorkout, setAddToWorkout] = useState<ILibrary[]>([]);
    const [saveForLater, setSaveForLater] = useState<ILibrary[]>([]);

    const sharedData = {
        addToWorkout,
        setAddToWorkout,
        saveForLater,
        setSaveForLater,
    }

  return (
    <WorkoutContext.Provider value={{sharedData}}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;