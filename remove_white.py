from PIL import Image

def remove_white(path):
    img = Image.open(path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # threshold for considering something "white" (e.g. R>240, G>240, B>240)
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # fully transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(path, "PNG")

remove_white("attached_assets/iem_logo_1754317566104.png")
remove_white("attached_assets/uem_logo_1754317566102.png")
