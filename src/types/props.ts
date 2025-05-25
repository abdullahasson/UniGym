// Next 
import { StaticImageData } from "next/image"

// Exercises Card
export interface ExercisesCardProps {
    equipment : string;
    gifUrl : StaticImageData;
    name : string;
    target : string;
    secondaryMuscles : string[];
    instructions : string[]
}

// Overview
export interface OverviewProps {
    text: string;
    percentage: number;
    value: string;
    // chartColor: string;
    // chartData: ChartData[];
}