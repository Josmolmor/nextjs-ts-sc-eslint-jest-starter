const APP_NAME = 'Molina';

export default function pageTitle(pageName?: string): string {
  if (!pageName) {
    return APP_NAME;
  }

  return `${pageName} | ${APP_NAME}`;
}
