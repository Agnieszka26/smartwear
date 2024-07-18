export interface TrainingBaseDetails {
  time: number;
  training: number;
}
export interface Statistics {
  // last_week: TrainingBaseDetails;
  // last_month: TrainingBaseDetails;
  last_year: TrainingBaseDetails;
}

export interface ChartDataMui {
  name: string;
  data: number[];
  labels: Date[];
  rate: boolean;
  comment: string;
}
export interface AreaBetweenLines {
  line1value: number;
  line2value: number;
  x: number;
  line1isHigherNext: boolean;
  line1isHigher: boolean;
}
export interface HelperLines {
  helperLineUp?: number;
  helperLineDown?: number;
}
export interface ChartDataReChartType {
  time: string;
  y: number ;
  y2: number;
}

export interface ChartDataReChartTypeOutOfRange {
  time: string;
  y: number|null ;
  y2: number|null;
}
export interface ComparisonChartData
  extends AreaBetweenLines,
    ChartDataReChartType {}
export interface ChartDataTwoSeries {
  name: string;
  data: number[];
  data2: number[];
  label: string;
  label2: string;
  labels: Date[];
  rate: boolean;
  comment: string;
  minY: number;
  maxY: number;
  minY2?: number;
  maxY2?: number;
}

export interface AverageValues {
  name: string;
  value: string | number;
}
export interface Exercise {
  title: string;
  rate: boolean;
  id: number;
  created_at: string;
  average_values: AverageValues[];
  chartData: ChartDataTwoSeries[];
}
export interface TrainingPlan {}

// REsponses from actual API

export interface ArmInclinations {
  id: number;
  exercise?: string;
  added_at: string;
  side: "left" | "right";
  alpha_angle: number;
  beta_angle: number;
  distance: number;
  training: number;
}

export interface ArmTensions {
  id: number;
  exercise?: string;
  added_at: string;
  side: "left" | "right";
  tension: number;
  training: number;
}

export interface BodyTilts {
  id: number;
  exercise: string;
  added_at: string;
  alpha: number;
  beta: number;
  gamma: number;
  training: number;
}

export interface Locations {
  id: number;
  exercise: string;
  added_at: string;
  lat: string;
  lon: string;
  speed: string;
  altitude: string;
  distance: string;
  training: number;
}

export interface Training {
  id:number;
  name: string;
  description: string;
  start_at: string;
  stop_at: string;
  user: number;
}

export interface VitalSigns {
  id: number;
  exercise: string;
  added_at: string;
  heart_rate: number;
  temperature: string;
  humidity: string;
  training: number;
}

export interface Results<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface UserType {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  user_type: string;
  birthdate: string;
  height: number;
  weight: string;
  target: string;
  trainers: number[];
}
export type Options = { value: string; name: string; id: string };
