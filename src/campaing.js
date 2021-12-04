// Replace the import path with "google-ads-api"
import { GoogleAdsApi, ResourceNames, enums, resources } from "google-ads-api";

// Make sure to pass in valid authentication!
const client = new GoogleAdsApi({
    client_id:
        "130187367003-rrae1b66bhu6ncc8aj027uub94m9s7mk.apps.googleusercontent.com",
    client_secret: "JmyatyI8TXcK0x7rkCJ3Tk3P",
    developer_token: "1JF6V5krOpWkuddPo7DKuw",
});

async function main() {
    const customer = client.Customer({
        customer_id: "919-267-0318",
        refresh_token: "<REFRESH_TOKEN>",
    });

    const campaign = new resources.Campaign({
        name: "Planet Express",
        campaign_budget: ResourceNames.campaignBudget(
            customer.credentials.customer_id,
            "123"
        ),
        advertising_channel_type: enums.AdvertisingChannelType.SEARCH,
        status: enums.CampaignStatus.PAUSED,
    });

    // Create the campaign
    const { results } = await customer.campaigns.create([campaign]);
    const [{ resource_name }] = results;

    // Update the campaign
    await customer.campaigns.update([
        { ...campaign, resource_name, name: "Zapp Brannigan" },
    ]);

    // Delete the campaign
    await customer.campaigns.remove([resource_name]);
}

main();
