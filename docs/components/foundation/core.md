# Core and Shared UI

Core Settings establishes the shared presentation and runtime services used throughout JM Framework.

## Eden setup

Place exactly one **[JMF] - Core > Core Settings** module. Configure:

- title and text fonts;
- framework accent colour;
- dialog theme: Modern, WW2 or Sci-fi;
- notification styling;
- world-label behaviour;
- Player Statistics defaults;
- debug logging.

## Runtime behaviour

Core publishes the selected visual settings, maintains the component-state registry and creates the Framework Status diary entry. Dialogs query Core when they open, so components share one visual language without duplicating theme settings.

World labels use the configured title font. Their Draw3D rendering respects range and line-of-sight settings.

## Debug logging

Enable debug logging only while diagnosing a mission. Informational, warning and error messages remain available regardless of this toggle.
