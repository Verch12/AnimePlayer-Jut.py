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
        list = ["default.py"] + os.listdir("plugins")
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