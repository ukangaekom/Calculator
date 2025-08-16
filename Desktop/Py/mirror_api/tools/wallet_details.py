from dotenv import load_dotenv
from moralis import evm_api
import asyncio
import os





load_dotenv()

api_key = os.getenv("API_KEY")




# async def fetch_data(url):
#     async with aiohttp.ClientSession() as session:
#         async with session.get(url) as response:
#             return await response.json()



def get_wallet_transaction(wallet, chain):
    result = evm_api.transaction.get_wallet_transactions(
        api_key=api_key,
        params={
            "chain": chain,
            "address": wallet
        }
    )
    
    return result["result"]


async def get_wallet_token_balance(params):
    result = await evm_api.token.get_wallet_token_balances(
        api_key=api_key,
        params = params
    )
    
    return result


def get_native_balance(wallet, chain):
    result = evm_api.balance.get_native_balance(
        api_key=api_key,
        params={
            "chain": chain,
            "address": wallet
        }
    )
    
    return result["balance"]

def calculate_transaction_score(wallet):
    details = get_wallet_transaction(wallet,"eth")
    last_activity = details[0]["block_timestamp"]
    total = 0
    for i in details:
        total += int(i["value"])

    return (total/len(details),last_activity)


def get_analysis(wallet):
    balance = get_native_balance(wallet,"eth")
    total_transaction_score = calculate_transaction_score(wallet)
    average_score = int(balance)/ total_transaction_score[0]
    smart_money = "yes" if average_score > 65 else "no"
    last_activity = total_transaction_score[1]
    
    return {
        "balance":balance,
        "average_score":average_score,
        "smart_money":smart_money,
        "latest_activity":last_activity
    }

