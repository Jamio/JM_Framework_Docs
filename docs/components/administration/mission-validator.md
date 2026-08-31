# MISSION VALIDATOR

## Overview

Mission Validator is a preflight tool for finding common framework setup mistakes before a mission reaches a server. A framework with many optional, interconnected systems can fail in ways that are difficult to spot during a quick editor preview: a settings module may be missing, two authoritative modules may have been placed, a classname may be mistyped, or an access object may not be synchronised to the module that expects it. The validator turns those silent configuration problems into a single readable report.

Checks cover the presence and uniqueness of important settings modules, invalid or unresolved classnames, broken synchronisation, contradictory options and component-specific requirements that can be confirmed from the editor state. Findings are separated by severity so that genuine blockers are distinguishable from recommendations or unusual but valid configurations. The validator is intentionally advisory and does not rewrite the mission or silently choose settings on the mission-maker's behalf.

It is most useful near the end of mission construction and after changing a module layout. Passing validation cannot prove that every narrative trigger or multiplayer interaction is correct, but it provides a consistent baseline and removes a large class of avoidable setup errors before group testing begins.

## How to set up the component

No additional module is required. The validator loads with the framework and checks missions that contain framework modules. Results are written to the RPT and retained for Mission Control.

## 3DEN Module Settings

Mission Validator has no dedicated 3DEN module or attributes.

## ZEN Modules

Mission Validator has no separate ZEN module. An authorised user can run it again from the **Overview** page of Mission Control.

## Troubleshooting

- Search the RPT for `[JM Framework 3][Mission Validator]` to find the complete report.
- Treat errors as broken or unsafe configuration. Warnings usually identify a feature that is incomplete or cannot work as configured.
- The validator cannot prove that arbitrary SQF, mission audio or multiplayer logic is correct; those still require normal testing.
