import json, re

path = r'C:/Midhuna/Five-Newssites/snewssitemi/public/data/politics.json'

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# New article details
new_article = {
    "category": "politics",
    "title": "Trump pledges bipartisan effort to cap credit‑card APRs at 10 %",
    "slug": "trump-pledges-bipartisan-cap-credit-card-apr",
    "image": "/images/trump-cap-apr.webp",
    "date": "November 23, 2026",
    "shortdescription": "President Trump announces a cross‑party plan to limit credit‑card interest rates to ten percent, igniting debate among legislators and consumer advocates.",
    "description": [
        {
            "subtitle": "Bipartisan Proposal",
            "text": "In a nationally televised address from the Capitol steps, President Donald Trump unveiled a proposal to work with Democratic leaders on legislation that would impose a statutory ceiling of ten percent on all credit‑card annual percentage rates. He framed the initiative as a response to the recent surge in average APRs, which have climbed above twenty percent, placing a heavy burden on households already grappling with high mortgage costs and inflationary pressures. The administration plans to coordinate with the Senate Banking Committee and the House Financial Services Committee to draft a bill that mandates transparent disclosure of rates, requires any changes to undergo Federal Reserve review, and extends the cap to both fixed‑rate and variable‑rate cards. By emphasizing a bipartisan approach, Trump seeks to attract moderate Democrats concerned about rising consumer debt while reinforcing his broader economic agenda of stimulating spending and protecting middle‑class earnings.",
        },
        {
            "subtitle": "Legislative Responses",
            "text": "The proposal quickly generated a spectrum of reactions on Capitol Hill. Senate Majority Leader Chuck Schumer praised the effort as a "significant step toward consumer protection," noting that Democratic members of the Banking Committee have long advocated for stricter interest‑rate oversight. Conversely, Republican Senator John Cornyn warned that a uniform cap could unintentionally tighten credit availability for small‑business owners and high‑risk borrowers, potentially shifting risk to other loan products. Progressive lawmakers, including Rep. Alexandria Ocasio‑Cortez, argued that ten percent is insufficient, urging a more aggressive ceiling or even the abolition of interest on essential credit. Consumer advocacy groups such as the Consumer Financial Protection Bureau welcomed the dialogue but stressed the need for robust enforcement mechanisms to prevent lenders from bypassing the cap through hidden fees or punitive penalties. A hearing is slated for early December, where banking executives, consumer advocates, and economists will present testimony, setting the stage for a contentious policy debate.",
        },
        {
            "subtitle": "Economic Analysis",
            "text": "Economists offered divergent forecasts on the macroeconomic impact of a ten‑percent APR ceiling. Proponents argue that reducing borrowing costs could lift disposable income, spur modest retail growth, and lower default rates on revolving debt, thereby contributing a small but measurable boost to GDP. They cite historical precedents, such as the early‑2000s credit‑card interest‑rate caps, which helped avert a broader debt crisis. Critics, however, caution that a statutory limit may compress banks' net‑interest margins, prompting lenders to tighten credit standards, increase ancillary fees, or pivot borrowers toward alternative financing products like personal loans with higher fixed rates. A recent Federal Reserve analysis estimated that the cap could shave up to 0.3 percentage points off bank profitability, potentially affecting dividend payouts and shareholder returns. The study also noted that the policy might accelerate fintech innovation, encouraging the development of non‑interest‑bearing payment solutions and reshaping the competitive landscape of consumer credit.",
        },
        {
            "subtitle": "Consumer Impact",
            "text": "Public sentiment appears broadly supportive of stricter credit‑card interest limits. Recent polling shows that 62 % of adults favor a ten‑percent cap or lower, citing personal experiences of debt spiraling under high‑rate cards during periods of economic uncertainty. Advocacy groups have organized town‑hall meetings and social‑media campaigns urging the administration to include provisions that block lenders from circumventing the cap through hidden fees, penalty charges, or variable‑rate loopholes. Some consumer organizations warn that without comprehensive oversight, issuers might simply raise annual fees or impose stricter qualification criteria, reducing credit access for lower‑income households. To mitigate these concerns, the draft legislation includes a consumer‑education component mandating clear, standardized disclosures and a Federal Trade Commission‑led financial‑literacy initiative. As the debate unfolds, everyday Americans are watching closely, hopeful that a bipartisan effort will translate into tangible relief from the growing burden of credit‑card debt."
        }
    ],
    "author": {
        "name": "Maria Rivera",
        "role": "Political Reporter",
        "bio": "Maria covers government accountability and legal affairs for the outlet.",
        "image": "/images/author-maria.jpg",
        "slug": "maria-rivera",
        "email": "maria.rivera@example.com"
    }
}

# Replace the existing Trump article (identified by the original title)
for i, article in enumerate(data):
    if isinstance(article, dict) and article.get('title', '').startswith('Trump vows'):
        data[i] = new_article
        break

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
