interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Content Creator'],
  customerRoles: [],
  tenantRoles: ['Advertiser', 'Moderator', 'Administrator', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'π Tech Heart',
  addOns: [],
};
