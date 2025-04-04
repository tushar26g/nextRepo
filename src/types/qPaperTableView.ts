export interface QPaperTableView {
  year: string;
  key: string;
}

export interface QPaperTableViewFull {
  title: string;
  key: string;
  description: string;
  qPaperLinks: QPaperTableView[];
}
