
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AdvisoryCropTip: typeof import("../../components/advisory/CropTip.vue")['default']
  AdvisoryWeatherCard: typeof import("../../components/advisory/WeatherCard.vue")['default']
  CommonAppFooter: typeof import("../../components/common/AppFooter.vue")['default']
  CommonAppHeader: typeof import("../../components/common/AppHeader.vue")['default']
  CommonLoadingSpinner: typeof import("../../components/common/LoadingSpinner.vue")['default']
  FarmerCropSelector: typeof import("../../components/farmer/CropSelector.vue")['default']
  FarmerProfileForm: typeof import("../../components/farmer/FarmerProfileForm.vue")['default']
  FarmerLocationPicker: typeof import("../../components/farmer/LocationPicker.vue")['default']
  HomeFeatureGrid: typeof import("../../components/home/FeatureGrid.vue")['default']
  HomeHowItWorks: typeof import("../../components/home/HowItWorks.vue")['default']
  HomeProblemStats: typeof import("../../components/home/ProblemStats.vue")['default']
  HomeRoadmap: typeof import("../../components/home/Roadmap.vue")['default']
  HomeSchemesBadges: typeof import("../../components/home/SchemesBadges.vue")['default']
  HomeTechStack: typeof import("../../components/home/TechStack.vue")['default']
  SchemesDocumentChecklist: typeof import("../../components/schemes/DocumentChecklist.vue")['default']
  SchemesEligibilityBadge: typeof import("../../components/schemes/EligibilityBadge.vue")['default']
  SchemesSchemeCard: typeof import("../../components/schemes/SchemeCard.vue")['default']
  SchemesSchemeDetail: typeof import("../../components/schemes/SchemeDetail.vue")['default']
  SchemesSchemeGrid: typeof import("../../components/schemes/SchemeGrid.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAdvisoryCropTip: LazyComponent<typeof import("../../components/advisory/CropTip.vue")['default']>
  LazyAdvisoryWeatherCard: LazyComponent<typeof import("../../components/advisory/WeatherCard.vue")['default']>
  LazyCommonAppFooter: LazyComponent<typeof import("../../components/common/AppFooter.vue")['default']>
  LazyCommonAppHeader: LazyComponent<typeof import("../../components/common/AppHeader.vue")['default']>
  LazyCommonLoadingSpinner: LazyComponent<typeof import("../../components/common/LoadingSpinner.vue")['default']>
  LazyFarmerCropSelector: LazyComponent<typeof import("../../components/farmer/CropSelector.vue")['default']>
  LazyFarmerProfileForm: LazyComponent<typeof import("../../components/farmer/FarmerProfileForm.vue")['default']>
  LazyFarmerLocationPicker: LazyComponent<typeof import("../../components/farmer/LocationPicker.vue")['default']>
  LazyHomeFeatureGrid: LazyComponent<typeof import("../../components/home/FeatureGrid.vue")['default']>
  LazyHomeHowItWorks: LazyComponent<typeof import("../../components/home/HowItWorks.vue")['default']>
  LazyHomeProblemStats: LazyComponent<typeof import("../../components/home/ProblemStats.vue")['default']>
  LazyHomeRoadmap: LazyComponent<typeof import("../../components/home/Roadmap.vue")['default']>
  LazyHomeSchemesBadges: LazyComponent<typeof import("../../components/home/SchemesBadges.vue")['default']>
  LazyHomeTechStack: LazyComponent<typeof import("../../components/home/TechStack.vue")['default']>
  LazySchemesDocumentChecklist: LazyComponent<typeof import("../../components/schemes/DocumentChecklist.vue")['default']>
  LazySchemesEligibilityBadge: LazyComponent<typeof import("../../components/schemes/EligibilityBadge.vue")['default']>
  LazySchemesSchemeCard: LazyComponent<typeof import("../../components/schemes/SchemeCard.vue")['default']>
  LazySchemesSchemeDetail: LazyComponent<typeof import("../../components/schemes/SchemeDetail.vue")['default']>
  LazySchemesSchemeGrid: LazyComponent<typeof import("../../components/schemes/SchemeGrid.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
