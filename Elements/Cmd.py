import os
import shutil

error = ''

def Logo(addition):
    os.system('cls')
    size = ' '*int((shutil.get_terminal_size()[0]-84)/2)
    print("\033[31m{}".format(addition)+"\033[36m{}".format('='*(shutil.get_terminal_size()[0]-len(addition))))
    print(f"""
    {size}     @@@@#                                                                         
    {size}     *@@ %  @@@@      @@@@  @@@@@@@@@@@        @@@  *@@      @= .@     * .#        
    {size}      @@ @  @##@      @##@  @@@@@@@@@@@        @ :=#  ---@    #+-@     --@         
    {size}      @@ @  %@+@      @=%%     %=-@            @::@    @.-@    %--@   --@          
    {size}      @@ @   %+@      @+@%     @#-@            @::@    @:-#      ---@--@           
    {size}      @- @   @##@    @+#%      @@=@            @::=*@@*-@          *.:@            
    {size}     @@ @     @@@@  @@@%       @@=@            @:-@                -:@              
    {size}  @@:+@@       @@@@@@@%        @@=@      %%    @:-@               --@               
    {size}   @@@           @@@%          ##@@      %%    ##%@             @@=@                
                                                                                     """)

def SelectionPlugin():
    global error
    nomder = 0

    while nomder != -1:
        list = ["default.py"] + os.listdir("Plugins")
        plaginsname = [list[i:i + shutil.get_terminal_size()[1] - 15] for i in range(0, len(list), shutil.get_terminal_size()[1] - 15)]
        indentation = len(f"{len(list) - 1}#")

        nomderplagin = 0
        Logo(error)
        page = f"[Page: {str(nomder)}/{len(plaginsname)-1}]"
        print("[Plugin selection]" + "=" * (int((shutil.get_terminal_size()[0]-len(page))/2)-18) + page + "=" * int((shutil.get_terminal_size()[0]-len(page))/2))
        for i in plaginsname[nomder]:
            print(f"{nomder*(shutil.get_terminal_size()[1]-15) + nomderplagin}{' '*(indentation-len(f'{nomder*(shutil.get_terminal_size()[1]-15) + nomderplagin}#'))}# {i}")
            nomderplagin += 1

        if len(plaginsname[nomder]) < shutil.get_terminal_size()[1]-15:
            for i in range(shutil.get_terminal_size()[1]-15-len(plaginsname[nomder])): print("")

        print('[Control:</>]'+'='*(shutil.get_terminal_size()[0]-13))

        temporaryNomder = input("?: ")
        # fatal error!!
        if (temporaryNomder == '<' or temporaryNomder == '>') or (temporaryNomder.isdigit() and int(temporaryNomder) < len(list)):
            error = ""
            if temporaryNomder not in "<>":
                return list[int(temporaryNomder)]
            else:
                if temporaryNomder == ">":
                    nomder += 1
                    if nomder >= len(plaginsname):
                        nomder = 0
                elif temporaryNomder == "<":
                    nomder -= 1
                    if nomder < 0:
                        nomder = len(plaginsname)-1
        else:
            error = "{FATAL ERROR!!!}"

def Unban():
    global error
    flag = True

    while flag == True:
        Logo(error)
        print("[General selection]" + "="*(shutil.get_terminal_size()[0]-19))
        print("\033[31m{}".format("If the program does not work, find a way to bypass the haschita!!! Does not work on Linux and MacOS.")+"\033[36m{}".format(""))
        general = ["unselected"]
        for file in os.listdir("unbanDPI"):
            if file[:7] == "general":
                general.append(file)
        for nameID in range(len(general)): print(f"{nameID}# {general[nameID]}")
        temporaryNomder = input("?: ")

        if (temporaryNomder.isdigit() and int(temporaryNomder) < len(general)):
            error = ""
            return general[int(temporaryNomder)]
            flag == False
        else:
            error = "{FATAL ERROR!!!}"