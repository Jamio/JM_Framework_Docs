# Intel

Intel provides two distinct player experiences: collectable documents that become permanent diary records, and readable image intel that must be inspected and remembered. Both use ACE interactions and optional world labels.

## Enable the component

Place one **[JMF] - Intel > Intel Settings** module and leave **Enable Intel** selected.

## 3DEN modules

### Intel Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Intel | Enabled | Master switch for collectable and readable intel. |
| Diary Section Name | Collected Intel | Top-level diary subject used by collected records. |

### Collectable Diary Intel

Synchronize the module to the document or prop players will collect.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Intel Content | Diary Entry Title | Recovered Intel | Title in the diary list. |
| Intel Content | Document Heading | FIELD REPORT | Highlighted heading inside the record. |
| Intel Content | Document Text | Placeholder text | Body content; line breaks and structured-text markup are supported. |
| Intel Content | Document Image Path | ACE document icon | Optional image above the text. |
| Access and Sharing | Who Can Collect | All players | Limits the ACE action by side. |
| Access and Sharing | Share Diary Record With | All players | Sends the record to everyone, the collector's side/group, or only the collector. |
| Access and Sharing | Interaction Text | Collect Intel | ACE action label. |
| Access and Sharing | Interaction Distance | `5` | Maximum action distance in metres. |
| Access and Sharing | Remove Object When Collected | Enabled | Deletes the prop after collection; otherwise it remains but cannot be collected twice. |
| Access and Sharing | Server Code on Collection | Empty | Runs once with the object, collector and record ID. |
| Diary Presentation | Colours, fonts and sizes | Mission defaults | Optional overrides for heading/body presentation. |
| World Label | Show, text, distance and height | Enabled / Intel / `20` / `1` | Controls the label above the synchronized prop. |

The collection callback receives:

```sqf
_this params ["_intelObject", "_collector", "_recordId"];
```

### Readable Image Intel

Synchronize the module to the readable prop. This opens the vanilla leaflet-style viewer and **does not save the contents to the diary**{ .jmf-emphasis }.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Readable Content | Full-page Image Path | ACE document icon | Main image shown in the viewer. |
| Readable Content | Readable Text | Placeholder text | Structured text shown with the image. |
| Interaction | Who Can Read | All players | Side restriction for the ACE action. |
| Interaction | Interaction Text | Read Intel | ACE action label. |
| Interaction | Interaction Distance | `5` | Maximum action distance. |
| World Label | Show, text, distance and height | Enabled / Read Intel / `20` / `1` | Controls the label above the prop. |

The default image path is:

```text
z\ace\addons\intelitems\ui\document_ca.paa
```

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Create Collectable Intel | A world object | Title, heading, image, collection access, recipients, action label, consume behaviour and world-label settings. |
| Create Readable Image Intel | A world object | Image, readable text, side access, action label and world-label settings. |

## Multiplayer

The server registers intel objects, validates collection and publishes diary records to the selected recipients. Registration is persistent for JIP clients. A collectable object can only resolve once.

## Troubleshooting

- Use single backslashes in addon paths; duplicated separators can prevent images loading.
- If an action is absent, confirm the object is synchronized and the player's side matches **Who Can Collect/Read**.
- If an ACE action is visible but nothing opens, verify **Intel Settings** is enabled and the image path exists on every client.
