export class Card {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly labels: string[],
    readonly lastUpdated: Date
  ) {}
  hasLabel = (label: string): boolean => this.labels.includes(label)
  hasOneLabelAtLeast = (labels: string[]): boolean =>
    labels.filter(l => this.hasLabel(l)).length > 0
}
