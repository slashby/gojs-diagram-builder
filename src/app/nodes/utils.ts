import {DiagramNodeConfig} from './declarations';

export const extractNodeSettingsFromConfig = ({title, figure, color, data}: DiagramNodeConfig) => ({
  title,
  figure,
  color,
  data,
});
