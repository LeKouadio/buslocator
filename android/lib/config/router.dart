import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../screens/auth/login_screen.dart';
import '../screens/auth/register_screen.dart';
import '../screens/home/home_screen.dart';
import '../screens/arret/arret_screen.dart';
import '../screens/favoris/favoris_screen.dart';
import 'constants.dart';
import '../screens/splash/splash_screen.dart';
final GoRouter appRouter = GoRouter(
  initialLocation: AppConstants.routeLogin,
  routes: [
    GoRoute(
      path: AppConstants.routeLogin,
      builder: (context, state) => const LoginScreen(),
    ),
    GoRoute(
      path: AppConstants.routeRegister,
      builder: (context, state) => const RegisterScreen(),
    ),
    GoRoute(
      path: AppConstants.routeHome,
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: AppConstants.routeArret,
      builder: (context, state) => const ArretScreen(),
    ),
    GoRoute(
      path: AppConstants.routeFavoris,
      builder: (context, state) => const FavorisScreen(),
    ),
    GoRoute(
      path: '/splash',
      builder: (context, state) => const SplashScreen(),
    ),
  ],
);