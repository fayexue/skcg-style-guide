export enum MediaQueries {
  // Applies to all styles up to the max-width
  XsMax = '@media (max-width: 479px)',  // Extra small screen / phone
  SmMax = '@media (max-width: 767px)',  // Small screen / tablet
  MdMax = '@media (max-width: 991px)',  // Medium screen / desktop
  LgMax = '@media (max-width: 1199px)', // Large screen / wide desktop

  // Applies to all styles below the min-width
  XsMin = '@media (min-width: 480px)',  // Extra small screen / phone
  SmMin = '@media (min-width: 768px)',  // Small screen / tablet
  MdMin = '@media (min-width: 992px)',  // Medium screen / desktop
  LgMin = '@media (min-width: 1200px)', // Large screen / wide desktop
}
