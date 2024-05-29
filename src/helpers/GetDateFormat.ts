export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Format the date to a human-readable string
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}
