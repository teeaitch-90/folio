// Components.d.ts — the complete catalog of the 102 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Admin) and usable directly in JSX.
import * as React from 'react';

// figma layer: "_admin" (node 26:16885)
export interface AdminProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Admin general" (node 32:3981)
export interface AdminGeneralProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Feature Team". */
  text1?: string;
  /** Text content; defaults to "Feature teams are cross-functional groups focused on specific product areas.". */
  text2?: string;
  /** Text content; defaults to "Type details". */
  text3?: string;
  /** Text content; defaults to "Name". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Admin perms" (node 32:5933)
export interface AdminPermsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Feature Team". */
  text1?: string;
  /** Text content; defaults to "Feature teams are cross-functional groups focused on specific product areas.". */
  text2?: string;
  /** Text content; defaults to "Who can manage teams". */
  text3?: string;
  /** Text content; defaults to "Who can create, archive, delete and restore teams". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Admin Settings" (node 32:5446)
export interface AdminSettingsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Feature Team". */
  text1?: string;
  /** Text content; defaults to "Feature teams are cross-functional groups focused on specific product areas. ". */
  text2?: string;
  /** Text content; defaults to "Is a verified team". */
  text3?: string;
  /** Text content; defaults to "Teams are marked as “Verified” to end users". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_align" (node 26:62836)
export interface AlignProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_analytics" (node 26:16958)
export interface AnalyticsProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_assets" (node 26:17032)
export interface AssetsProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_atlassian" (node 26:5037)
export interface AtlassianProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_atlassian-access" (node 26:31153)
export interface AtlassianAccessProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_atlassian-attribution" (node 26:63206)
export interface AtlassianAttributionProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Atlassian-Light" (node 26:4964)
export interface AtlassianLightProps {
  className?: string;
  style?: React.CSSProperties;
  brand?: "atlassian";
  type?: "mark" | "logo";
  appearance?: "brand" | "inverse" | "neutral";
}

// figma layer: "_atlassian-marketplace" (node 26:31226)
export interface AtlassianMarketplaceProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Atlassian Teams" (node 22:454)
export interface AtlassianTeamsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Avatar" (node 26:66557)
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "woman 1" | "variant3" | "variant10" | "variant11" | "variant12" | "variant13" | "variant14" | "variant4" | "variant5" | "variant6" | "variant7" | "variant8" | "variant9" | "variant15";
  /** Text content; defaults to "+10". */
  text1?: string;
}

// figma layer: "❖ Avatar (Early Access)" (node 26:65013)
export interface AvatarEarlyAccessProps {
  className?: string;
  style?: React.CSSProperties;
  isInteractive?: boolean;
  appearance?: "default" | "square";
  isDisabled?: boolean;
  selected?: boolean;
  presence?: "busy" | "focus" | "none" | "offline" | "online";
  size?: "xsmall (16px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (96px)" | "xxlarge (128px)";
  state?: "default" | "hover" | "press" | "focus";
  status?: "none" | "approved" | "declined" | "locked";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Avatar Stack" (node 26:66589)
export interface AvatarStackProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Badge 🛑" (node 21:8999)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "m";
  kind?: "default" | "subtle";
  state?: "default" | "blue" | "gold";
}

// figma layer: "❖ Badge (Early Access)" (node 26:64963)
export interface BadgeEarlyAccessProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  appearance?: "added" | "default" | "important" | "primary" | "primary (inverted)" | "removed";
  /** Text content; defaults to "+". */
  text1?: string;
}

// figma layer: "_bamboo-data-center" (node 26:47836)
export interface BambooDataCenterProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_bitbucket" (node 26:31301)
export interface BitbucketProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_bitbucket-data-center" (node 26:45596)
export interface BitbucketDataCenterProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Brand Icons/Goal" (node 26:1915)
export interface BrandIconsGoalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Brand Icons/Graph Bar" (node 26:1923)
export interface BrandIconsGraphBarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Brand Icons/Home" (node 26:1906)
export interface BrandIconsHomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Brand Icons/Office Building" (node 26:1931)
export interface BrandIconsOfficeBuildingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Brand Icons/Projects" (node 26:1919)
export interface BrandIconsProjectsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Breadcrumbs" (node 26:66348)
export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Teams / Vitafleet Web Development". */
  text1?: string;
}

// figma layer: "❖ Button (EAP)" (node 27:2885)
export interface ButtonEAPProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "team type" | "teams" | "gaosl" | "projects" | "department" | "operations" | "location" | "member active" | "team type selected" | "gaols selected" | "project sslected";
  /** Text content; defaults to "Member". */
  text1?: string;
}

// figma layer: "❖ Button (Early Access)" (node 26:64503)
export interface ButtonEarlyAccessProps {
  className?: string;
  style?: React.CSSProperties;
  iconBefore?: boolean;
  label?: string;
  isLoading?: boolean;
  appearance?: "default" | "primary" | "subtle" | "warning" | "danger";
  isDisabled?: boolean;
  iconAfter?: boolean;
  state?: "default" | "hover" | "press" | "focus";
  isSelected?: boolean;
  spacing?: "default" | "compact";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_chat" (node 26:47909)
export interface ChatProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Code parts / <CreateButton>" (node 26:64944)
export interface CodePartsCreateButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Code parts / <Header>" (node 32:3710)
export interface CodePartsHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Code parts / <Help>" (node 26:64987)
export interface CodePartsHelpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Code parts / <Notifications>" (node 26:64978)
export interface CodePartsNotificationsProps {
  className?: string;
  style?: React.CSSProperties;
  showBadge?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Code parts / <Profile>" (node 26:66238)
export interface CodePartsProfileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Code parts / <Search> / M and above" (node 26:64419)
export interface CodePartsSearchMAndProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Code parts / <Settings>" (node 26:64992)
export interface CodePartsSettingsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Code parts / <Status>" (node 26:64996)
export interface CodePartsStatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "approved" | "declined" | "locked";
}

// figma layer: "Code parts / <Tab>" (node 26:66400)
export interface CodePartsTabProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "hover" | "press" | "focus";
  isSelected?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Code parts / <TopNavMiddle>" (node 26:64946)
export interface CodePartsTopNavMiddleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Code parts / <TopNavStart>" (node 26:63975)
export interface CodePartsTopNavStartProps {
  className?: string;
  style?: React.CSSProperties;
  showCustomTitle?: boolean;
  /** Text content; defaults to "Custom title". */
  text1?: string;
}

// figma layer: "_compass" (node 26:47982)
export interface CompassProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_confluence" (node 26:48057)
export interface ConfluenceProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_confluence-data-center" (node 26:48130)
export interface ConfluenceDataCenterProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_crowd-data-center" (node 26:62178)
export interface CrowdDataCenterProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "cta-button" (node 5:22)
export interface CtaButtonProps {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  style2?: "primary" | "secondary";
  rightIcon?: boolean;
  state?: "default" | "hover";
  /** Text content; defaults to "Label". */
  text1?: string;
}

// figma layer: "_customer-service-management" (node 26:62251)
export interface CustomerServiceManagementProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "elemBefore" (node 27:1890)
export interface ElemBeforeProps {
  className?: string;
  style?: React.CSSProperties;
  element?: "icon" | "avatar" | "slot";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_focus" (node 26:62325)
export interface FocusProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "❖ Focus ring" (node 26:1519)
export interface FocusRingProps {
  className?: string;
  style?: React.CSSProperties;
  borderWidth?: "1px" | "2px";
}

// figma layer: "global.nav" (node 26:66240)
export interface GlobalNavProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "_goals" (node 26:62398)
export interface GoalsProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_guard" (node 26:62471)
export interface GuardProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_home" (node 26:62544)
export interface HomeProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Home" (node 26:66304)
export interface Home2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "For you". */
  text1?: string;
}

// figma layer: "_hub" (node 26:62617)
export interface HubProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "❖ Icon" (node 26:1101)
export interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  size?: "small (12px)" | "medium (16px)";
  spacing?: "none" | "spacious (24px)";
}

// figma layer: "❖ Icon button (Early Access)" (node 26:1535)
export interface IconButtonEarlyAccessProps {
  className?: string;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  appearance?: "default" | "subtle" | "primary";
  isSelected?: boolean;
  showTooltip?: boolean;
  state?: "default" | "hover" | "press" | "focus";
  shape?: "default" | "circle";
  spacing?: "default" | "compact";
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_jira" (node 26:62690)
export interface JiraProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_jira-data-center" (node 26:62763)
export interface JiraDataCenterProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_jira-product-discovery" (node 26:62911)
export interface JiraProductDiscoveryProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_jira-service-management" (node 26:62984)
export interface JiraServiceManagementProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "List item" (node 26:66459)
export interface ListItemProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "page" | "board" | "notion" | "loom" | "google sheet" | "variant6";
  /** Text content; defaults to "VitaFleet Deployment & Scheduling". */
  text1?: string;
  /** Text content; defaults to "Confluence space". */
  text2?: string;
}

// figma layer: "List small" (node 26:66597)
export interface ListSmallProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "parent team" | "people" | "avatars" | "teams";
  /** Text content; defaults to "Parent team". */
  text1?: string;
  /** Text content; defaults to "Vitafleet Engineering". */
  text2?: string;
  /** Text content; defaults to "Head of Marketing". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "❖ Logo" (node 26:63865)
export interface Logo2Props {
  className?: string;
  style?: React.CSSProperties;
  product?: "atlassian" | "admin" | "analytics" | "assets" | "atlassian access" | "atlassian marketplace" | "bitbucket" | "chat" | "compass" | "confluence" | "crowd data center" | "customer service management" | "focus" | "goals" | "guard" | "home" | "hub" | "jira" | "align" | "jira product discovery" | "jira service management" | "loom" | "loom-teamwork" | "loom attribution" | "opsgenie" | "projects" | "search" | "rovo" | "statuspage" | "studio" | "talent" | "teams" | "trello" | "bamboo data center" | "bitbucket data center" | "confluence data center" | "jira data center";
}

// figma layer: "Logo - Light" (node 26:21899)
export interface LogoLightProps {
  className?: string;
  style?: React.CSSProperties;
  brand?: "atlassian" | "atlas" | "bamboo" | "bitbucket" | "clover" | "compass" | "confluence" | "crowd" | "crucible" | "fisheye" | "focus" | "guard" | "jira" | "jira align" | "jira product discovery" | "jpd compact" | "jira service management" | "jsm compact" | "loom" | "opsgenie" | "rovo" | "sourcetree" | "statuspage" | "trello" | "atlassian analytics" | "atlassian automation" | "atlassian data lake" | "atlassian intelligence" | "atlassian access" | "atlassian accessibility" | "atlassian admin" | "atlassian administration" | "atlassian advisory services" | "atlassian blog" | "atlassian certification" | "atlassian champions" | "atlassian community" | "atlassian community events" | "atlassian design" | "atlassian developer" | "atlassian directory" | "atlassian documentation" | "atlassian ecosystem" | "atlassian enterprise" | "atlassian for startups" | "atlassian foundation" | "atlassian government cloud" | "atlassian isolated cloud" | "atlassian learning" | "atlassian marketplace" | "atlassian partner" | "atlassian support" | "atlassian university";
  type?: "mark" | "logo" | "attribution";
  appearance?: "brand" | "inverse" | "neutral";
}

// figma layer: "_loom" (node 26:63059)
export interface LoomProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_loom-teamwork" (node 26:63132)
export interface LoomTeamworkProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "minheight-controller" (node 32:3706)
export interface MinheightControllerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Multi-purpose / Arrow left" (node 32:3186)
export interface MultiPurposeArrowLeftProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Multi-purpose / Check mark" (node 32:5441)
export interface MultiPurposeCheckMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Multi-purpose / Cross" (node 27:1897)
export interface MultiPurposeCrossProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Multi-purpose / Image" (node 26:1087)
export interface MultiPurposeImageProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_opsgenie" (node 26:63279)
export interface OpsgenieProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "People" (node 26:66326)
export interface PeopleProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "selected";
  /** Text content; defaults to "People". */
  text1?: string;
}

// figma layer: "People" (node 27:2961)
export interface People2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "People". */
  text1?: string;
  /** Text content; defaults to "68 teams". */
  text2?: string;
}

// figma layer: "people cards" (node 26:66441)
export interface PeopleCardsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Kyashi Nagitama". */
  text1?: string;
  /** Text content; defaults to "Engineering Manager". */
  text2?: string;
  /** Text content; defaults to "Sydney, Australia". */
  text3?: string;
}

// figma layer: "Programs and Properties-light" (node 26:17124)
export interface ProgramsAndPropertiesLightProps {
  className?: string;
  style?: React.CSSProperties;
  brand?: "atlassian access" | "atlassian accessibility" | "atlassian admin" | "atlassian administration" | "atlassian advisory services" | "atlassian blog" | "atlassian certification" | "atlassian champions" | "atlassian community" | "atlassian community events" | "atlassian design" | "atlassian developer" | "atlassian directory" | "atlassian documentation" | "atlassian ecosystem" | "atlassian enterprise" | "atlassian for startups" | "atlassian foundation" | "atlassian government cloud" | "atlassian isolated cloud" | "atlassian learning" | "atlassian marketplace" | "atlassian partner" | "atlassian support" | "atlassian university";
  type?: "mark" | "logo" | "attribution";
  appearance?: "brand" | "inverse" | "neutral";
}

// figma layer: "Programs and Properties-Light/Atlassian/logo/brand" (node 26:17106)
export interface ProgramsAndPropertiesLightAtlassianProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_projects" (node 26:63352)
export interface ProjectsProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "<RemoveButton>" (node 27:1900)
export interface RemoveButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "pressed" | "focus";
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_rovo" (node 26:63498)
export interface RovoProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_search" (node 26:63425)
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Search " (node 27:1878)
export interface Search2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Search teams". */
  text1?: string;
}

// figma layer: "Sidenav" (node 26:66344)
export interface SidenavProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Single-purpose / Add" (node 26:64421)
export interface SinglePurposeAddProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Single-purpose / Link external" (node 26:66627)
export interface SinglePurposeLinkExternalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Single-purpose / Show more horizontal" (node 26:66395)
export interface SinglePurposeShowMoreHorizontalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Slot" (node 26:63990)
export interface SlotProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_statuspage" (node 26:63571)
export interface StatuspageProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "_studio" (node 26:63644)
export interface StudioProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "❖ Tag (Early Access)" (node 27:1915)
export interface TagEarlyAccessProps {
  className?: string;
  style?: React.CSSProperties;
  elemBefore?: boolean;
  appearance?: "default";
  text?: string;
  isRemovable?: boolean;
  state?: "default" | "hover" | "press" | "focus";
  linkComponent?: boolean;
  color?: "standard (default)" | "blue" | "grey" | "green" | "purple" | "red" | "teal" | "yellow" | "lime" | "orange" | "magenta";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "_talent" (node 26:63717)
export interface TalentProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "team avatar/24" (node 26:66512)
export interface TeamAvatar24Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "pink" | "blue" | "greem" | "red" | "purple" | "orange" | "teal";
}

// figma layer: "team avatar/32" (node 26:66350)
export interface TeamAvatar32Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "pink" | "blue" | "greem" | "red" | "purple" | "orange";
}

// figma layer: "team-card" (node 28:3997)
export interface TeamCardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Marketing Team". */
  text1?: string;
  /** Text content; defaults to "15 members • 2 agents ". */
  text2?: string;
  /** Text content; defaults to "Meet the marketing team at Vitafleet, where creativity meets strategy to drive brand growth and engagement.". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Team profile" (node 26:66630)
export interface TeamProfileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Vitafleet Web Development". */
  text1?: string;
  /** Text content; defaults to "Software Team". */
  text2?: string;
  /** Text content; defaults to "About the team". */
  text3?: string;
  /** Text content; defaults to "Based in vibrant Sydney, Australia, the VitaFleet Web Dev team focuses on enhancing VitaFleet's online services. They've advanced by migrating the payment flow to microservices, prioritizing Lean, ensuring seamless, secure transactions. Their dedication to excellence fuels ongoing innovation.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "_teams" (node 26:4886)
export interface TeamsProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Teams" (node 26:66280)
export interface Teams2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "selected" | "default";
  /** Text content; defaults to "Teams". */
  text1?: string;
}

// figma layer: "_trello" (node 26:63792)
export interface TrelloProps {
  className?: string;
  style?: React.CSSProperties;
  appearance?: "brand" | "inverse" | "neutral";
  type?: "icon" | "logo";
  size?: "xxsmall (16px)" | "xsmall (20px)" | "small (24px)" | "medium (32px)" | "large (40px)" | "xlarge (48px)";
}

// figma layer: "Type component v2" (node 32:3225)
export interface TypeComponentV2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "official team" | "normal team" | "custom team";
  /** Text content; defaults to "Official Team". */
  text1?: string;
  /** Text content; defaults to "18 teams • 12 active configurations". */
  text2?: string;
  /** Text content; defaults to "Official teams represent recognised, managed groups in your organisation.". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "verified" (node 26:66389)
export interface VerifiedProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "12" | "variant2";
}

declare const Admin: React.FC<AdminProps>;
declare const AdminGeneral: React.FC<AdminGeneralProps>;
declare const AdminPerms: React.FC<AdminPermsProps>;
declare const AdminSettings: React.FC<AdminSettingsProps>;
declare const Align: React.FC<AlignProps>;
declare const Analytics: React.FC<AnalyticsProps>;
declare const Assets: React.FC<AssetsProps>;
declare const Atlassian: React.FC<AtlassianProps>;
declare const AtlassianAccess: React.FC<AtlassianAccessProps>;
declare const AtlassianAttribution: React.FC<AtlassianAttributionProps>;
declare const AtlassianLight: React.FC<AtlassianLightProps>;
declare const AtlassianMarketplace: React.FC<AtlassianMarketplaceProps>;
declare const AtlassianTeams: React.FC<AtlassianTeamsProps>;
declare const Avatar: React.FC<AvatarProps>;
declare const AvatarEarlyAccess: React.FC<AvatarEarlyAccessProps>;
declare const AvatarStack: React.FC<AvatarStackProps>;
declare const Badge: React.FC<BadgeProps>;
declare const BadgeEarlyAccess: React.FC<BadgeEarlyAccessProps>;
declare const BambooDataCenter: React.FC<BambooDataCenterProps>;
declare const Bitbucket: React.FC<BitbucketProps>;
declare const BitbucketDataCenter: React.FC<BitbucketDataCenterProps>;
declare const BrandIconsGoal: React.FC<BrandIconsGoalProps>;
declare const BrandIconsGraphBar: React.FC<BrandIconsGraphBarProps>;
declare const BrandIconsHome: React.FC<BrandIconsHomeProps>;
declare const BrandIconsOfficeBuilding: React.FC<BrandIconsOfficeBuildingProps>;
declare const BrandIconsProjects: React.FC<BrandIconsProjectsProps>;
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
declare const ButtonEAP: React.FC<ButtonEAPProps>;
declare const ButtonEarlyAccess: React.FC<ButtonEarlyAccessProps>;
declare const Chat: React.FC<ChatProps>;
declare const CodePartsCreateButton: React.FC<CodePartsCreateButtonProps>;
declare const CodePartsHeader: React.FC<CodePartsHeaderProps>;
declare const CodePartsHelp: React.FC<CodePartsHelpProps>;
declare const CodePartsNotifications: React.FC<CodePartsNotificationsProps>;
declare const CodePartsProfile: React.FC<CodePartsProfileProps>;
declare const CodePartsSearchMAnd: React.FC<CodePartsSearchMAndProps>;
declare const CodePartsSettings: React.FC<CodePartsSettingsProps>;
declare const CodePartsStatus: React.FC<CodePartsStatusProps>;
declare const CodePartsTab: React.FC<CodePartsTabProps>;
declare const CodePartsTopNavMiddle: React.FC<CodePartsTopNavMiddleProps>;
declare const CodePartsTopNavStart: React.FC<CodePartsTopNavStartProps>;
declare const Compass: React.FC<CompassProps>;
declare const Confluence: React.FC<ConfluenceProps>;
declare const ConfluenceDataCenter: React.FC<ConfluenceDataCenterProps>;
declare const CrowdDataCenter: React.FC<CrowdDataCenterProps>;
declare const CtaButton: React.FC<CtaButtonProps>;
declare const CustomerServiceManagement: React.FC<CustomerServiceManagementProps>;
declare const ElemBefore: React.FC<ElemBeforeProps>;
declare const Focus: React.FC<FocusProps>;
declare const FocusRing: React.FC<FocusRingProps>;
declare const GlobalNav: React.FC<GlobalNavProps>;
declare const Goals: React.FC<GoalsProps>;
declare const Guard: React.FC<GuardProps>;
declare const Home: React.FC<HomeProps>;
declare const Home2: React.FC<Home2Props>;
declare const Hub: React.FC<HubProps>;
declare const Icon: React.FC<IconProps>;
declare const IconButtonEarlyAccess: React.FC<IconButtonEarlyAccessProps>;
declare const Jira: React.FC<JiraProps>;
declare const JiraDataCenter: React.FC<JiraDataCenterProps>;
declare const JiraProductDiscovery: React.FC<JiraProductDiscoveryProps>;
declare const JiraServiceManagement: React.FC<JiraServiceManagementProps>;
declare const ListItem: React.FC<ListItemProps>;
declare const ListSmall: React.FC<ListSmallProps>;
declare const Logo2: React.FC<Logo2Props>;
declare const LogoLight: React.FC<LogoLightProps>;
declare const Loom: React.FC<LoomProps>;
declare const LoomTeamwork: React.FC<LoomTeamworkProps>;
declare const MinheightController: React.FC<MinheightControllerProps>;
declare const MultiPurposeArrowLeft: React.FC<MultiPurposeArrowLeftProps>;
declare const MultiPurposeCheckMark: React.FC<MultiPurposeCheckMarkProps>;
declare const MultiPurposeCross: React.FC<MultiPurposeCrossProps>;
declare const MultiPurposeImage: React.FC<MultiPurposeImageProps>;
declare const Opsgenie: React.FC<OpsgenieProps>;
declare const People: React.FC<PeopleProps>;
declare const People2: React.FC<People2Props>;
declare const PeopleCards: React.FC<PeopleCardsProps>;
declare const ProgramsAndPropertiesLight: React.FC<ProgramsAndPropertiesLightProps>;
declare const ProgramsAndPropertiesLightAtlassian: React.FC<ProgramsAndPropertiesLightAtlassianProps>;
declare const Projects: React.FC<ProjectsProps>;
declare const RemoveButton: React.FC<RemoveButtonProps>;
declare const Rovo: React.FC<RovoProps>;
declare const Search: React.FC<SearchProps>;
declare const Search2: React.FC<Search2Props>;
declare const Sidenav: React.FC<SidenavProps>;
declare const SinglePurposeAdd: React.FC<SinglePurposeAddProps>;
declare const SinglePurposeLinkExternal: React.FC<SinglePurposeLinkExternalProps>;
declare const SinglePurposeShowMoreHorizontal: React.FC<SinglePurposeShowMoreHorizontalProps>;
declare const Slot: React.FC<SlotProps>;
declare const Statuspage: React.FC<StatuspageProps>;
declare const Studio: React.FC<StudioProps>;
declare const TagEarlyAccess: React.FC<TagEarlyAccessProps>;
declare const Talent: React.FC<TalentProps>;
declare const TeamAvatar24: React.FC<TeamAvatar24Props>;
declare const TeamAvatar32: React.FC<TeamAvatar32Props>;
declare const TeamCard: React.FC<TeamCardProps>;
declare const TeamProfile: React.FC<TeamProfileProps>;
declare const Teams: React.FC<TeamsProps>;
declare const Teams2: React.FC<Teams2Props>;
declare const Trello: React.FC<TrelloProps>;
declare const TypeComponentV2: React.FC<TypeComponentV2Props>;
declare const Verified: React.FC<VerifiedProps>;
declare global {
  interface Window {
    Admin: React.FC<AdminProps>;
    AdminGeneral: React.FC<AdminGeneralProps>;
    AdminPerms: React.FC<AdminPermsProps>;
    AdminSettings: React.FC<AdminSettingsProps>;
    Align: React.FC<AlignProps>;
    Analytics: React.FC<AnalyticsProps>;
    Assets: React.FC<AssetsProps>;
    Atlassian: React.FC<AtlassianProps>;
    AtlassianAccess: React.FC<AtlassianAccessProps>;
    AtlassianAttribution: React.FC<AtlassianAttributionProps>;
    AtlassianLight: React.FC<AtlassianLightProps>;
    AtlassianMarketplace: React.FC<AtlassianMarketplaceProps>;
    AtlassianTeams: React.FC<AtlassianTeamsProps>;
    Avatar: React.FC<AvatarProps>;
    AvatarEarlyAccess: React.FC<AvatarEarlyAccessProps>;
    AvatarStack: React.FC<AvatarStackProps>;
    Badge: React.FC<BadgeProps>;
    BadgeEarlyAccess: React.FC<BadgeEarlyAccessProps>;
    BambooDataCenter: React.FC<BambooDataCenterProps>;
    Bitbucket: React.FC<BitbucketProps>;
    BitbucketDataCenter: React.FC<BitbucketDataCenterProps>;
    BrandIconsGoal: React.FC<BrandIconsGoalProps>;
    BrandIconsGraphBar: React.FC<BrandIconsGraphBarProps>;
    BrandIconsHome: React.FC<BrandIconsHomeProps>;
    BrandIconsOfficeBuilding: React.FC<BrandIconsOfficeBuildingProps>;
    BrandIconsProjects: React.FC<BrandIconsProjectsProps>;
    Breadcrumbs: React.FC<BreadcrumbsProps>;
    ButtonEAP: React.FC<ButtonEAPProps>;
    ButtonEarlyAccess: React.FC<ButtonEarlyAccessProps>;
    Chat: React.FC<ChatProps>;
    CodePartsCreateButton: React.FC<CodePartsCreateButtonProps>;
    CodePartsHeader: React.FC<CodePartsHeaderProps>;
    CodePartsHelp: React.FC<CodePartsHelpProps>;
    CodePartsNotifications: React.FC<CodePartsNotificationsProps>;
    CodePartsProfile: React.FC<CodePartsProfileProps>;
    CodePartsSearchMAnd: React.FC<CodePartsSearchMAndProps>;
    CodePartsSettings: React.FC<CodePartsSettingsProps>;
    CodePartsStatus: React.FC<CodePartsStatusProps>;
    CodePartsTab: React.FC<CodePartsTabProps>;
    CodePartsTopNavMiddle: React.FC<CodePartsTopNavMiddleProps>;
    CodePartsTopNavStart: React.FC<CodePartsTopNavStartProps>;
    Compass: React.FC<CompassProps>;
    Confluence: React.FC<ConfluenceProps>;
    ConfluenceDataCenter: React.FC<ConfluenceDataCenterProps>;
    CrowdDataCenter: React.FC<CrowdDataCenterProps>;
    CtaButton: React.FC<CtaButtonProps>;
    CustomerServiceManagement: React.FC<CustomerServiceManagementProps>;
    ElemBefore: React.FC<ElemBeforeProps>;
    Focus: React.FC<FocusProps>;
    FocusRing: React.FC<FocusRingProps>;
    GlobalNav: React.FC<GlobalNavProps>;
    Goals: React.FC<GoalsProps>;
    Guard: React.FC<GuardProps>;
    Home: React.FC<HomeProps>;
    Home2: React.FC<Home2Props>;
    Hub: React.FC<HubProps>;
    Icon: React.FC<IconProps>;
    IconButtonEarlyAccess: React.FC<IconButtonEarlyAccessProps>;
    Jira: React.FC<JiraProps>;
    JiraDataCenter: React.FC<JiraDataCenterProps>;
    JiraProductDiscovery: React.FC<JiraProductDiscoveryProps>;
    JiraServiceManagement: React.FC<JiraServiceManagementProps>;
    ListItem: React.FC<ListItemProps>;
    ListSmall: React.FC<ListSmallProps>;
    Logo2: React.FC<Logo2Props>;
    LogoLight: React.FC<LogoLightProps>;
    Loom: React.FC<LoomProps>;
    LoomTeamwork: React.FC<LoomTeamworkProps>;
    MinheightController: React.FC<MinheightControllerProps>;
    MultiPurposeArrowLeft: React.FC<MultiPurposeArrowLeftProps>;
    MultiPurposeCheckMark: React.FC<MultiPurposeCheckMarkProps>;
    MultiPurposeCross: React.FC<MultiPurposeCrossProps>;
    MultiPurposeImage: React.FC<MultiPurposeImageProps>;
    Opsgenie: React.FC<OpsgenieProps>;
    People: React.FC<PeopleProps>;
    People2: React.FC<People2Props>;
    PeopleCards: React.FC<PeopleCardsProps>;
    ProgramsAndPropertiesLight: React.FC<ProgramsAndPropertiesLightProps>;
    ProgramsAndPropertiesLightAtlassian: React.FC<ProgramsAndPropertiesLightAtlassianProps>;
    Projects: React.FC<ProjectsProps>;
    RemoveButton: React.FC<RemoveButtonProps>;
    Rovo: React.FC<RovoProps>;
    Search: React.FC<SearchProps>;
    Search2: React.FC<Search2Props>;
    Sidenav: React.FC<SidenavProps>;
    SinglePurposeAdd: React.FC<SinglePurposeAddProps>;
    SinglePurposeLinkExternal: React.FC<SinglePurposeLinkExternalProps>;
    SinglePurposeShowMoreHorizontal: React.FC<SinglePurposeShowMoreHorizontalProps>;
    Slot: React.FC<SlotProps>;
    Statuspage: React.FC<StatuspageProps>;
    Studio: React.FC<StudioProps>;
    TagEarlyAccess: React.FC<TagEarlyAccessProps>;
    Talent: React.FC<TalentProps>;
    TeamAvatar24: React.FC<TeamAvatar24Props>;
    TeamAvatar32: React.FC<TeamAvatar32Props>;
    TeamCard: React.FC<TeamCardProps>;
    TeamProfile: React.FC<TeamProfileProps>;
    Teams: React.FC<TeamsProps>;
    Teams2: React.FC<Teams2Props>;
    Trello: React.FC<TrelloProps>;
    TypeComponentV2: React.FC<TypeComponentV2Props>;
    Verified: React.FC<VerifiedProps>;
  }
}
