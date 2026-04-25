import 'package:flutter/material.dart';
import 'config/router.dart';
import 'config/theme.dart';

void main() {
  runApp(const BusLocatorApp());
}

class BusLocatorApp extends StatelessWidget {
  const BusLocatorApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Bus Locator',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.theme,
      routerConfig: appRouter,
    );
  }
}