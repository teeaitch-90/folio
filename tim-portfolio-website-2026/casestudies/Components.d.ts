// Components.d.ts — the complete catalog of the 29 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Arrow) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Arrow" (node 19:1750)
export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "blue" | "green" | "red";
}

// figma layer: "Arrow" (node 16:229)
export interface Arrow2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Arrow" (node 16:232)
export interface Arrow3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Assets/Check" (node 21:8716)
export interface AssetsCheckProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "disabled" | "default" | "hover/focused" | "warning" | "error";
  filled?: "off" | "on";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
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

// figma layer: "Badge 🛑" (node 21:9022)
export interface Badge2Props {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "m";
  kind?: "default" | "subtle";
  state?: "default" | "blue" | "gold";
}

// figma layer: "🟢 Button  - v1.1" (node 21:8522)
export interface ButtonV11Props {
  className?: string;
  style?: React.CSSProperties;
  buttonType?: "outline" | "primary" | "secondary" | "tertiary";
  state?: "enabled" | "pressed" | "disabled" | "hover";
  icon?: "default" | "left" | "right";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "contextual-nav-item-inactive" (node 21:8834)
export interface ContextualNavItemInactiveProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "inactive" | "active" | "complete" | "active-complete" | "section" | "variant6" | "active-load" | "inactive-load";
  /** Text content; defaults to "Item name". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
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

// figma layer: "Icon/Default/16/Chevron/Down" (node 19:1840)
export interface IconDefault16ChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/16/Tick" (node 21:8712)
export interface IconDefault16TickProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/24/Accounts" (node 21:8509)
export interface IconDefault24AccountsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/24/External Link" (node 19:6693)
export interface IconDefault24ExternalLinkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Account/Reports" (node 19:2239)
export interface IconDefault32AccountReportsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Accounts" (node 19:2259)
export interface IconDefault32AccountsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Dashboard" (node 19:2210)
export interface IconDefault32DashboardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Doc/PDF" (node 21:9059)
export interface IconDefault32DocPDFProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Manage People" (node 19:2283)
export interface IconDefault32ManagePeopleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Default/32/Upload" (node 21:9039)
export interface IconDefault32UploadProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Status/16/Success" (node 21:8705)
export interface IconStatus16SuccessProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Status/16/Success" (node 21:8779)
export interface IconStatus16Success2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Status/24/Success" (node 21:9063)
export interface IconStatus24SuccessProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Logo" (node 19:2135)
export interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "black" | "white";
  variant?: "mark" | "horizontal" | "vertical";
}

// figma layer: "Macquarie" (node 15:45)
export interface MacquarieProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "mq-icon" (node 19:2384)
export interface MqIconProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "account-details" | "account-reports" | "account-rewards" | "account-statements" | "account-update-maturity" | "accounts" | "accounts-card" | "activate-your-card" | "add" | "add-account" | "address-book" | "archive" | "arrow-back" | "arrow-down" | "arrow-right" | "arrow-up" | "attachment" | "bank" | "bpay" | "browser-chrome" | "browser-default" | "browser-firefox" | "browser-ie" | "browser-opera" | "browser-safari" | "budgets" | "calculator" | "camera" | "cards" | "cart" | "category-food-and-drink-default" | "category-home" | "category-home-apartment" | "category-home-bathroom" | "category-home-bedroom" | "category-home-car-park" | "category-home-loan" | "category-home-rates" | "category-home-townhouse" | "category-income-dividends-and-distributions" | "category-services-other-service-expenses" | "category-technology-online-services" | "category-transportation-auto-payments" | "checkbox-empty" | "checkbox-ticked" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "close" | "copy" | "dashboard" | "date" | "date-of-birth" | "debits" | "delete" | "desktop" | "device-ipad" | "device-iphone" | "doc-doc" | "doc-pdf" | "doc-xls" | "download" | "drag" | "edit" | "email" | "email-opened" | "export-csv" | "export-qif" | "external-link" | "eye" | "face-sad" | "fax" | "feedback" | "file" | "filter" | "future" | "gesture-click" | "gift-cards" | "graph" | "help" | "image" | "info" | "insights" | "interest" | "legal" | "list" | "lock" | "logout" | "mailing-address" | "marketplace" | "menu" | "minus" | "money" | "months" | "more" | "notifications" | "offline" | "online" | "pay-id" | "pay-text" | "phone" | "pin" | "plus" | "print" | "profile" | "recurring" | "refund" | "reload" | "reset" | "return" | "rolling-codes" | "savings" | "search" | "security" | "send" | "settings" | "share" | "star" | "star-filled" | "statements" | "status-call" | "status-error" | "status-info" | "status-pending" | "status-success" | "status-transfer" | "status-unavailable" | "status-warning" | "stocks" | "success" | "task-centre" | "tick" | "tiled" | "time" | "transfer" | "travel" | "unarchive" | "unlock" | "user" | "warning" | "years" | "sort-arrow-down" | "sort-arrow-up" | "status-error-transparent" | "status-info-transparent" | "status-success-transparent" | "status-transfer-transparent" | "status-warning-transparent" | "suspended" | "category-home-double-bed" | "category-home-single-bed" | "category-travel-flights" | "deactivated" | "task-centre-alt" | "category-insurance" | "category-investment" | "checklist" | "device-android" | "faceid" | "fingerprint" | "iphone" | "manage-payments" | "manage-people" | "map-pin" | "nickname-account" | "reports" | "credit-limit" | "direct-debit" | "incomplete" | "manage" | "move-money" | "pay" | "pin-code" | "private-banking" | "push" | "reporting" | "research" | "status-denied" | "status-review" | "task-center" | "tools" | "wallet" | "category-business-clothing" | "category-business-default" | "category-business-salary" | "category-children-baby-supplies" | "category-children-childcare" | "category-children-clothing" | "category-children-default" | "category-children-entertainment" | "category-children-toys" | "category-education-default" | "category-education-other-expenses" | "category-education-room-and-board" | "category-education-stationery" | "category-education-student-loans" | "category-education-tuition-and-fees" | "category-fees-actuary" | "category-fees-advisor" | "category-fees-atm" | "category-fees-default" | "category-financial-transfers" | "category-food-and-drink-alcohol-and-bars" | "category-food-and-drink-coffee-and-tea" | "category-food-and-drink-desert" | "category-food-and-drink-fast-food" | "category-food-and-drink-groceries" | "category-food-and-drink-tobacco" | "category-general-cash" | "category-general-other-shopping" | "category-general-unknown" | "category-gifts-and-donations-charities" | "category-gifts-and-donations-gifts" | "category-health-and-medical-care-facilities" | "category-health-and-medical-dentist" | "category-health-and-medical-doctor" | "category-health-and-medical-equipment" | "category-health-and-medical-eyes" | "category-health-and-medical-hearing" | "category-health-and-medical-other" | "category-health-and-medical-pharmacies" | "category-home-furnishings" | "category-home-house" | "category-home-lawn-and-garden" | "category-home-maintenance" | "category-home-moving" | "category-home-rent" | "category-home-storage" | "category-home-supplies" | "category-income-interest" | "category-legal-default" | "category-leisure-art" | "category-leisure-books-and-news" | "category-leisure-dance" | "category-leisure-family-and-attractions" | "category-leisure-fun" | "category-leisure-games" | "category-leisure-movies" | "category-leisure-music" | "category-leisure-other" | "category-other-chemicals" | "category-other-construction" | "category-other-durables" | "category-other-nondurables" | "category-other-supplies" | "category-personal-accessories" | "category-personal-beauty" | "category-personal-body-enhancements" | "category-personal-cleaning-services" | "category-personal-clothing" | "category-personal-counselling" | "category-personal-hair" | "category-personal-hobbies" | "category-personal-jewellery" | "category-personal-laundry" | "category-personal-online-shopping" | "category-personal-politics" | "category-personal-religion" | "category-personal-shoes" | "category-personal-spa-and-massage" | "category-pets-other" | "category-pets-pet-food" | "category-pets-pet-grooming" | "category-pets-veterinary" | "category-services-agriculture" | "category-services-architecture" | "category-services-marketing" | "category-sports-and-fitness-camping" | "category-sports-and-fitness-default" | "category-sports-and-fitness-golf" | "category-sports-and-fitness-membership" | "category-superannuation-default" | "category-technology-domains-and-hosting" | "category-technology-hardware" | "category-technology-other-technology-expenses" | "category-technology-software" | "category-transportation-bicycle" | "category-transportation-boats-and-marine" | "category-transportation-fuel" | "category-transportation-motorbike-costs" | "category-transportation-parking-and-tolls" | "category-transportation-public-transit" | "category-transportation-shipping" | "category-transportation-taxis" | "category-travel-accommodation" | "category-travel-entertainment" | "category-travel-other-travel-expenses" | "category-utilities-computer-network" | "category-utilities-electricity-gas-and-water" | "category-utilities-other-utility-expenses" | "category-utilities-pay-tv" | "credit-review" | "credit-review2" | "chevron-left-double" | "docs-recieved" | "loan-purpose" | "loan-purpose2" | "loan-purpose3" | "user-lock" | "user-shield" | "home-success" | "user-file" | "robot" | "email-resend";
  size?: "24" | "16" | "64" | "32";
}

// figma layer: "notifications" (node 19:1949)
export interface NotificationsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "24/Pin" (node 19:2312)
export interface Pin24Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "🟢 Small button - v.1.1" (node 19:1848)
export interface SmallButtonV11Props {
  className?: string;
  style?: React.CSSProperties;
  buttonType?: "outline" | "primary" | "secondary";
  state?: "enabled" | "pressed" | "disabled" | "hover";
  icon?: "default" | "right" | "left";
  /** Text content; defaults to "Button". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Spinner" (node 21:8793)
export interface SpinnerProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "l" | "m" | "s" | "xs";
  state?: "brand" | "inverse" | "inverse static" | "mono" | "disabled";
}

declare const Arrow: React.FC<ArrowProps>;
declare const Arrow2: React.FC<Arrow2Props>;
declare const Arrow3: React.FC<Arrow3Props>;
declare const AssetsCheck: React.FC<AssetsCheckProps>;
declare const Badge: React.FC<BadgeProps>;
declare const Badge2: React.FC<Badge2Props>;
declare const ButtonV11: React.FC<ButtonV11Props>;
declare const ContextualNavItemInactive: React.FC<ContextualNavItemInactiveProps>;
declare const CtaButton: React.FC<CtaButtonProps>;
declare const IconDefault16ChevronDown: React.FC<IconDefault16ChevronDownProps>;
declare const IconDefault16Tick: React.FC<IconDefault16TickProps>;
declare const IconDefault24Accounts: React.FC<IconDefault24AccountsProps>;
declare const IconDefault24ExternalLink: React.FC<IconDefault24ExternalLinkProps>;
declare const IconDefault32AccountReports: React.FC<IconDefault32AccountReportsProps>;
declare const IconDefault32Accounts: React.FC<IconDefault32AccountsProps>;
declare const IconDefault32Dashboard: React.FC<IconDefault32DashboardProps>;
declare const IconDefault32DocPDF: React.FC<IconDefault32DocPDFProps>;
declare const IconDefault32ManagePeople: React.FC<IconDefault32ManagePeopleProps>;
declare const IconDefault32Upload: React.FC<IconDefault32UploadProps>;
declare const IconStatus16Success: React.FC<IconStatus16SuccessProps>;
declare const IconStatus16Success2: React.FC<IconStatus16Success2Props>;
declare const IconStatus24Success: React.FC<IconStatus24SuccessProps>;
declare const Logo: React.FC<LogoProps>;
declare const Macquarie: React.FC<MacquarieProps>;
declare const MqIcon: React.FC<MqIconProps>;
declare const Notifications: React.FC<NotificationsProps>;
declare const Pin24: React.FC<Pin24Props>;
declare const SmallButtonV11: React.FC<SmallButtonV11Props>;
declare const Spinner: React.FC<SpinnerProps>;
declare global {
  interface Window {
    Arrow: React.FC<ArrowProps>;
    Arrow2: React.FC<Arrow2Props>;
    Arrow3: React.FC<Arrow3Props>;
    AssetsCheck: React.FC<AssetsCheckProps>;
    Badge: React.FC<BadgeProps>;
    Badge2: React.FC<Badge2Props>;
    ButtonV11: React.FC<ButtonV11Props>;
    ContextualNavItemInactive: React.FC<ContextualNavItemInactiveProps>;
    CtaButton: React.FC<CtaButtonProps>;
    IconDefault16ChevronDown: React.FC<IconDefault16ChevronDownProps>;
    IconDefault16Tick: React.FC<IconDefault16TickProps>;
    IconDefault24Accounts: React.FC<IconDefault24AccountsProps>;
    IconDefault24ExternalLink: React.FC<IconDefault24ExternalLinkProps>;
    IconDefault32AccountReports: React.FC<IconDefault32AccountReportsProps>;
    IconDefault32Accounts: React.FC<IconDefault32AccountsProps>;
    IconDefault32Dashboard: React.FC<IconDefault32DashboardProps>;
    IconDefault32DocPDF: React.FC<IconDefault32DocPDFProps>;
    IconDefault32ManagePeople: React.FC<IconDefault32ManagePeopleProps>;
    IconDefault32Upload: React.FC<IconDefault32UploadProps>;
    IconStatus16Success: React.FC<IconStatus16SuccessProps>;
    IconStatus16Success2: React.FC<IconStatus16Success2Props>;
    IconStatus24Success: React.FC<IconStatus24SuccessProps>;
    Logo: React.FC<LogoProps>;
    Macquarie: React.FC<MacquarieProps>;
    MqIcon: React.FC<MqIconProps>;
    Notifications: React.FC<NotificationsProps>;
    Pin24: React.FC<Pin24Props>;
    SmallButtonV11: React.FC<SmallButtonV11Props>;
    Spinner: React.FC<SpinnerProps>;
  }
}
