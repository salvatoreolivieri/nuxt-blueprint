export const formatDate = (date: string) => {
  const { locale } = useI18n()
  const suffix = computed(() => (locale.value === "it" ? "IT" : "GB"))

  const [day, month, year] = date.split("/")

  // Create a Date object
  const dateObject = new Date(`${year}-${month}-${day}T00:00:00`)

  // Format the date as "DD MMM"
  const formattedDate = dateObject.toLocaleString(
    `${locale.value}-${suffix.value}`,
    {
      day: "numeric",
      month: "short",
    }
  )

  return formattedDate
}
