export function parseNameAndLink(input: string) {
  const match = input.match(/^\[([^\]]+)\]\((\/[^\)]+)\)$/)

  if (!match) {
    throw new Error('Invalid input format. Expected format: [Name](/link)')
  }

  return {
    name: match[1],
    link: match[2]
  }
}
