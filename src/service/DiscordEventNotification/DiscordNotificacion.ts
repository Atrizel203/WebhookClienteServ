const webhookULR = "https://discord.com/api/webhooks/1218246770107219989/DV3QXyt_K0hJ_x2LoF5UHF47HwFc3IfQQeP2n-33A7gi3eZUcN18CsCUOkHfCuZV72SI";
export const notifyDiscord = async (message: string) => {
    const body = {
        content: message
    }
    console.log(webhookULR);
    const response = await fetch(webhookULR, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
    if (!response.ok) {
        console.log("Error al enviar el mensaje")
        return false;
    }
    return true;
}