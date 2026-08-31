# MISSION VALIDATOR

## Overview

Mission Validator checks the placed framework modules for common configuration mistakes. It is intended as a preflight aid: it points out missing or duplicate settings modules, invalid classnames, broken synchronisation and contradictory settings before they become harder to diagnose in play.

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
