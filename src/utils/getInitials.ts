function getInitials(fullName: string) {
  const names = fullName.trim().split(/\s+/);

  const firstInitial = names[0][0];
  const lastInitial = names[names.length - 1][0];

  return (firstInitial + lastInitial).toUpperCase();
}

export default getInitials;
