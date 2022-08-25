# Twitch moderator terminal bot

Launch this link to assign moderator privileges

```
https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=<clientid>&redirect_uri=<localhost specified in console>&scope=channel:moderate+channel:read
```

Then take the response code and put in inside as .env key

API W/OUT ANY NEEDED TOKEN

-   Get Channel information
-   Get Channel Emotes
-   Get Global Emotes
-   Get Emote Sets
-   Get Channel Chat Badges
-   Modify Channel Information (own channel)
-   Create Custom Rewards(own channel)
-   Delete Custom Reward (own channel)
-   Get Custom Reward(own)
-   Get Custom Reward Redemption(own)
-   Update Custom Reward(own)
-   Update Redemption Status(own)
-   Get Channel Chat Badges
-   Get Global Chat Badges
-   Update Chat Settings(own)
-   Redeem Code
-   Get Extension Live Channels (interesting)
