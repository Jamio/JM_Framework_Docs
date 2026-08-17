# Debriefing

Debriefing presents a themed mission-result screen before the vanilla ending. It combines the result, mission text, imagery, personal statistics and team commendations into one controlled end-of-mission sequence.

## Enable the component

Place one **[JMF] - Debriefing > Debriefing Settings** module. Player Statistics should remain enabled when personal performance and team awards are wanted.

## 3DEN modules

### Debriefing Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Mission Result Text | Success Summary | The mission was completed successfully. | Default body text for a successful result. |
| Mission Result Text | Failure Summary | The mission objectives were not completed. | Default body text for a failed result. |
| Presentation | Debriefing Image | Empty | Uses this image; when blank, falls back to `overviewPicture` or `loadScreen`. |
| Behaviour | Show Team Awards | Enabled | Displays grouped commendations calculated from Player Statistics. |
| Behaviour | Automatically End Mission | Enabled | Ends the mission after the debriefing duration. |
| Behaviour | Display Duration (seconds) | `45` | Time before automatic ending. |

### End Mission with Debriefing

Synchronize this module to a trigger to start the ending from normal mission logic.

| Attribute | Default | What it does |
| --- | --- | --- |
| Mission Result | Mission Complete | Selects the successful or failed presentation. |
| Summary Override | Empty | Replaces the matching Settings summary for this particular ending. |

## Setup walkthrough

1. Place and configure **Debriefing Settings**.
2. Place **End Mission with Debriefing** and synchronize it to the ending trigger.
3. Choose the result and optional one-off summary override.
4. If using an outro, enable **Open Debrief After Sequence** on the Cutscene Sequence Controller instead of firing both systems independently.

**Do not trigger a separate debrief module and an outro hand-off at the same time.**{ .jmf-emphasis } This can create two competing ending requests.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| End Mission with Debriefing | Empty ground | Selects **Mission Complete** or **Mission Failed** and starts the same server-owned ending flow. |

## Multiplayer

The server requests a final Player Statistics flush before publishing the debrief payload. Every client opens the themed dialog from the same result state. Automatic ending remains server-authoritative.

## Troubleshooting

- If statistics are blank, verify Player Statistics is enabled in **Core Settings** and allow its final flush to complete.
- If no image appears, use a valid mission-relative or addon PAA path, or configure `overviewPicture`/`loadScreen`.
- If the mission ends without a dialog, confirm the module is synchronized to the intended trigger and the trigger activates on the server.
